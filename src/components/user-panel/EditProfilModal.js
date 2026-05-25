import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../Btn";
// import AJAX from "../utils/AJAX";
import Spinner from "../Spinner";
// import { LoginAPI } from "../utils/Api";
// import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";
import { toFormData } from "axios";
import { useUser } from "../../context/UserContex";

export default function EditProfilModal({ onClose, loading, setLoading }) {
  //TODO hardcode

  const honeypotRef = useRef(null); // Ref do ukrytego pola honeypot

  const { user, setUser } = useUser();

  // const [loading, setLoading] = useState(false);
  const { firstName, lastName, email } = user;

  function handleCancelEditProfil() {
    onClose();
  }

  async function handleSubmitEditProfil(e) {
    e.preventDefault();

    setUser((obj) => ({
      ...obj,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
    }));

    // setLoading(true);
    try {
      //TODO;
      //Logika logiki
      // const response = await AJAX(LoginAPI, userLoginData);
      // localStorage.setItem("token", response.token);
      // setLoginCheck(true);
      // await getFoodItems?.(response.token);
      // await getKcalItems?.(response.token);
      // setIsLogin(true);
      toast.success("Profil edytowano pomyślnie!", toastConfig);
    } catch (err) {
      toast.error("Edycja profilu nieudane!", toastConfig);
    } finally {
      setLoading(false);
      onClose();
    }
  }

  const modal = (
    <div className="edit-profil-modal">
      <div className="edit-profil-modal__modal frame">
        <button
          type="button"
          className={`edit-profil-modal__modal-btn_close ${loading ? "button--loading" : ""}`}
          aria-label="Zamknij"
          onClick={handleCancelEditProfil}
          disabled={loading}
        >
          ×
        </button>
        <div className="edit-profil-modal__content">
          <div className="edit-profil-modal__content__header">
            <h2 className="edit-profil-modal__content__header-headline">
              Edycja profilu
            </h2>
          </div>
          <form
            className="edit-profil-modal__content__form"
            onSubmit={handleSubmitEditProfil}
          >
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              ref={honeypotRef}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />
            <div className="edit-profil-modal__content__form-field">
              <input
                className={`edit-profil-modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="email"
                id="email"
                autoComplete="email"
                defaultValue={email}
                placeholder="*Adres e-mail"
                required
                disabled={loading}
              />
              <label htmlFor="email">*Adres e-mail</label>
            </div>
            <div className="edit-profil-modal__content__form-field">
              <input
                className={`edit-profil-modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                defaultValue={firstName || ""}
                placeholder="Imię"
                disabled={loading}
              />
              <label htmlFor="firstName">Imię</label>
            </div>
            <div className="edit-profil-modal__content__form-field">
              <input
                className={`edit-profil-modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                defaultValue={lastName || ""}
                placeholder="Nazwisko"
                disabled={loading}
              />
              <label htmlFor="lastName">Nazwisko</label>
            </div>

            <Button
              className={` btn ${loading ? "loading" : ""}`}
              type="submit"
              style={{
                animation: "moveInBotton 0.5s backwards ease-in-out 0.3s",
              }}
              loading={loading}
            >
              {loading ? <Spinner /> : "Zapisz"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
