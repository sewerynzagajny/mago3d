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
  const passs = "Seweryn123456";
  // const { setIsLogin } = useAuth();
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const checkPassworRef = useRef(null);
  const honeypotRef = useRef(null); // Ref do ukrytego pola honeypot

  const { user, setUser } = useUser();

  // const [loading, setLoading] = useState(false);
  const { firstName, lastName, email } = user;

  function handleCancelChangePassword() {
    onClose();
  }

  async function handleSubmitChangePassword(e) {
    e.preventDefault();

    const currentPassword = (currentPasswordRef.current?.value ?? "").replace(
      /\s/g,
      "",
    );
    const newPassword = (newPasswordRef.current?.value ?? "").replace(
      /\s/g,
      "",
    );
    const confirmPassword = (checkPassworRef.current?.value ?? "").replace(
      /\s/g,
      "",
    );
    setLoading(true);

    if (currentPassword !== passs) {
      toast.error("Aktualne hasło nieprawidłowe!", toastConfig);
      currentPasswordRef.current.value = "";
      newPasswordRef.current.value = "";
      checkPassworRef.current.value = "";
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Hasło musi składać się z minimum 6 znaków!", toastConfig);
      currentPasswordRef.current.value = "";
      newPasswordRef.current.value = "";
      checkPassworRef.current.value = "";
      setLoading(false);
      return;
    }

    if (newPassword === currentPassword) {
      toast.error("Nowe hasło jest takie samo co aktualne!", toastConfig);
      currentPasswordRef.current.value = "";
      newPasswordRef.current.value = "";
      checkPassworRef.current.value = "";
      setLoading(false);
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Potwierdzenie hasła nie powiodło się!", toastConfig);
      currentPasswordRef.current.value = "";
      newPasswordRef.current.value = "";
      checkPassworRef.current.value = "";
      setLoading(false);
      return;
    }

    const userRegData = { password: newPasswordRef.current.value };
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
      toast.success("Nowe hasło zapisano pomyślnie!", toastConfig);
    } catch (err) {
      toast.error("Zmiana hasła nieudana!", toastConfig);
    } finally {
      setLoading(false);
      onClose();
    }
  }

  const modal = (
    <div className="change-pw-modal">
      <div className="change-pw-modal__modal frame">
        <button
          type="button"
          className={`change-pw-modal__modal-btn_close ${loading ? "button--loading" : ""}`}
          aria-label="Zamknij"
          onClick={handleCancelChangePassword}
          disabled={loading}
        >
          ×
        </button>
        <div className="change-pw-modal__content">
          <div className="change-pw-modal__content__header">
            <h2 className="change-pw-modal__content__header-headline">
              Edycja profilu
            </h2>
          </div>
          <form
            className="change-pw-modal__content__form"
            onSubmit={handleSubmitChangePassword}
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
            <div className="registraction_modal__content__form-field">
              <label htmlFor="email">*Adres e-mail</label>
              <input
                className={`registraction_modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) =>
                  setUser((obj) => ({ ...obj, email: e.target.value }))
                }
                placeholder="Adres e-mail"
                required
                disabled={loading}
              />
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="firstName"
              >
                *Imię
              </label>
              <input
                type="text"
                defaultValue={firstName || ""}
                className="add-edit-address__form__field--input"
                name="firstName"
                id="firstName"
                required
              />
            </div>
            <div className="add-edit-address__form__field">
              <label
                className="add-edit-address__form__field--label"
                htmlFor="lastName"
              >
                *Nazwisko
              </label>
              <input
                type="text"
                defaultValue={lastName || ""}
                className="add-edit-address__form__field--input"
                name="lastName"
                id="lastName"
                required
              />
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

          <div className="change-pw-modal__contentchange-pw">
            <p className="change-pw-modal__contentchange-pw-text">
              Hasło powinno mieć min. 6 znaków{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
