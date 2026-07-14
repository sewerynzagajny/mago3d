import { useEffect, useRef } from "react";

const GEOWIDGET_SCRIPT_URL =
  "https://geowidget.easypack24.net/js/sdk-for-javascript.js";
const GEOWIDGET_CSS_URL = "https://geowidget.easypack24.net/css/easypack.css";

export default function InpostGeowidget({ selectedParcelMachine, onSelect }) {
  const initialized = useRef(false);

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

  function handleOpenWidget() {
    if (!window.easyPack) return;

    window.easyPack.modalMap(
      (point, modal) => {
        modal.closeModal();
        onSelect({
          id: point.name,
          address: `${point.address.line1}, ${point.address.line2}`,
        });
      },
      { width: 500, height: 600 },
    );
  }

  return (
    <div className="inpost-geowidget">
      <button
        type="button"
        onClick={handleOpenWidget}
        className="address-card__info__buttons--button"
      >
        {selectedParcelMachine ? "Zmień paczkomat" : "Wybierz paczkomat"}
      </button>

      {selectedParcelMachine && (
        <div className="inpost-geowidget__selected">
          <p>
            <strong>{selectedParcelMachine.id}</strong>
          </p>
          <p>{selectedParcelMachine.address}</p>
        </div>
      )}
    </div>
  );
}
