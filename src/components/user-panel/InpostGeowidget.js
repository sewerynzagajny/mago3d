import { useEffect, useRef } from "react";
import Btn from "../Btn";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";

const GEOWIDGET_SCRIPT_URL =
  "https://geowidget.easypack24.net/js/sdk-for-javascript.js";
const GEOWIDGET_CSS_URL = "https://geowidget.easypack24.net/css/easypack.css";

export default function InpostGeowidget({ selectedParcelMachine, onSelect }) {
  const initialized = useRef(false);

  // Mostek łapie funkcję z propsa 'onSelect' i trzyma ją w oknie przeglądarki
  useEffect(() => {
    window._currentInpostOnSelect = onSelect;
    return () => {
      window._currentInpostOnSelect = null;
    };
  }, [onSelect]);

  useEffect(() => {
    // Załaduj CSS jeśli jeszcze nie ma
    if (!document.querySelector(`link[href="${GEOWIDGET_CSS_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = GEOWIDGET_CSS_URL;
      document.head.appendChild(link);
    }

    // Załaduj skrypt jeśli jeszcze nie ma
    if (!document.querySelector(`script[src="${GEOWIDGET_SCRIPT_URL}"]`)) {
      const script = document.createElement("script");
      script.src = GEOWIDGET_SCRIPT_URL;
      script.async = true;
      script.onload = () => {
        initWidget();
      };
      document.head.appendChild(script);
    } else {
      // Skrypt już załadowany
      initWidget();
    }
  }, []);

  useEffect(() => {
    const wrapInpostModalInside = () => {
      const widgetModal = document.getElementById("widget-modal");

      if (widgetModal) {
        // Szukamy, czy nasz główny wrapper już istnieje wewnątrz #widget-modal
        const existingWrapper = widgetModal.querySelector(".inpost-modal");

        // Jeśli modal jest otwarty, ma dzieci, ale nie został jeszcze owinięty
        if (!existingWrapper && widgetModal.children.length > 0) {
          // 1. Tworzymy zewnętrzny div z Twoimi klasami
          const frameWrapper = document.createElement("div");
          frameWrapper.className = "frame hover-effect-card inpost-modal";

          frameWrapper.style.width = "100%";
          frameWrapper.style.height = "100%";
          frameWrapper.style.display = "flex";
          frameWrapper.style.flexDirection = "column";

          // 2. Tworzymy NOWY wewnętrzny div pośredni
          const contentWrapper = document.createElement("div");
          contentWrapper.className = "widget-modal__content";

          contentWrapper.style.width = "100%";
          contentWrapper.style.height = "100%";
          contentWrapper.style.display = "flex";
          contentWrapper.style.flexDirection = "column";

          // 3. Łączymy je: contentWrapper wkładamy do środka frameWrapper
          frameWrapper.appendChild(contentWrapper);

          // 4. Przenosimy wszystkie oryginalne dzieci InPostu do contentWrapper
          while (widgetModal.firstChild) {
            contentWrapper.appendChild(widgetModal.firstChild);
          }

          // 5. Wrzucamy całą gotową konstrukcję z powrotem do #widget-modal
          widgetModal.appendChild(frameWrapper);
        }
      }
    };

    // Nasłuchiwanie na dynamiczne zmiany wewnątrz drzewa DOM
    const observer = new MutationObserver(() => {
      wrapInpostModalInside();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  function initWidget() {
    if (initialized.current) return;
    if (!window.easyPack) return;

    window.easyPack.init({
      defaultLocale: "pl",
      mapType: "osm",
      searchType: "osm",
      points: {
        types: ["parcel_locker"],
      },
    });

    initialized.current = true;
  }

  // function handleOpenWidget() {
  //   if (!window.easyPack) return;

  //   window.easyPack.modalMap(
  //     (point, modal) => {
  //       modal.closeModal();
  //       // ZAMIAST bezpośredniego onSelect, pukamy do naszego mostka globalnego,
  //       // który po powrocie na podstronę natychmiast przekieruje dane do NOWEGO stanu Reacta.
  //       if (typeof window._currentInpostOnSelect === "function") {
  //         window._currentInpostOnSelect({
  //           id: point.name,
  //           address: `${point.address.line1}, ${point.address.line2}`,
  //         });
  //       }
  //       toast.success(`Wybrano Paczkomat: ${point.name}`, toastConfig);
  //     },
  //     { width: 500, height: 600 },
  //   );
  // }

  function handleOpenWidget() {
    if (!window.easyPack) return;

    // Przekazujemy aktualny stan, aby mapa wiedziała czy ma zaznaczyć stary punkt, czy być czysta
    const modalOptions = {
      width: 500,
      height: 600,
      selectPoint: selectedParcelMachine?.id || "",
    };

    window.easyPack.modalMap((point, modal) => {
      // Blok try-catch wewnątrz callbacku zabezpiecza przed błędami odczytu danych punktu
      try {
        modal.closeModal();

        if (!point) throw new Error("Brak danych punktu z InPostu");

        // 1. Sprawdzamy czy to pierwszy wybór, czy zmiana i wysyłamy odpowiedni toast
        if (selectedParcelMachine && selectedParcelMachine.id) {
          if (selectedParcelMachine.id !== point.name) {
            toast.success(`Zmieniono Paczkomat na: ${point.name}`, toastConfig);
          }
        } else {
          toast.success(`Wybrano Paczkomat: ${point.name}`, toastConfig);
        }

        // 2. Przekazanie danych do stanu Reacta przez mostek
        if (typeof window._currentInpostOnSelect === "function") {
          window._currentInpostOnSelect({
            id: point.name,
            address: `${point.address.line1}, ${point.address.line2}`,
          });
        }
      } catch (err) {
        console.error("Błąd podczas zapisywania paczkomatu:", err);
        toast.error("Nie udało się zapisać wybranego paczkomatu!", toastConfig);
      } finally {
        // Blok finally wykona się ZAWSZE – niezależnie od tego, czy zapis się udał, czy wywalił błąd.
        // Przydatne, jeśli w przyszłości dodasz np. setLoading(false) dla całego widżetu.
        console.log("Zakończono proces wyboru punktu InPost.");
      }
    }, modalOptions);
  }

  function handleDeleteParcelAddress() {
    try {
      // 1. Czyścimy wszelkie zaznaczenia i aktywne klasy InPostu w drzewie DOM
      if (window.easyPack) {
        window.easyPack.selectedPoint = null;
      }

      // Usuwamy klasę aktywności z elementów listy i markerów, jeśli InPost je zachował
      const activeElements = document.querySelectorAll(
        ".easypack-popup, .active, [data-active='true']",
      );
      activeElements.forEach((el) => {
        el.classList.remove("active");
        el.removeAttribute("data-active");
      });

      // Zamykamy dymki informacyjne (popupy) na mapie OpenStreetMap
      const popups = document.querySelectorAll(".leaflet-popup-close-button");
      popups.forEach((btn) => btn.click());
      // 2. Zerujemy stan w React
      onSelect(null);

      toast.success("Usunięto adres paczkomatu", toastConfig);
    } catch (err) {
      toast.error("Nieudane usunięcie adresu paczkomatu!", toastConfig);
    } finally {
      // setLoading(false);
    }
  }

  return (
    <div className="inpost-geowidget">
      {selectedParcelMachine && (
        <div className="inpost-geowidget__selected">
          <p>
            <strong>{selectedParcelMachine.id}</strong>
          </p>
          <p>{selectedParcelMachine.address}</p>
        </div>
      )}
      <div className="inpost-geowidget__btns">
        <Btn onClick={handleOpenWidget} className="btn">
          {selectedParcelMachine ? "Zmień paczkomat" : "Wybierz paczkomat"}
        </Btn>
        {selectedParcelMachine && (
          <Btn onClick={handleDeleteParcelAddress} className="btn">
            Usuń
          </Btn>
        )}
      </div>
    </div>
  );
}
