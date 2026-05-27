import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../Btn";
// import AJAX from "../utils/AJAX";
import Spinner from "../Spinner";
// import { LoginAPI } from "../utils/Api";
// import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";

export default function ChangePasswordModal({ onClose, loading, setLoading }) {
  //TODO hardcode
  const passs = "Seweryn123456";
  // const { setIsLogin } = useAuth();
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const checkPassworRef = useRef(null);
  const honeypotRef = useRef(null); // Ref do ukrytego pola honeypot

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
              Zmiana hasła
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
            <div className="change-pw-modal__content__form-field">
              <input
                className={`change-pw-modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="password"
                id="currentPassword"
                autoComplete="password"
                ref={currentPasswordRef}
                placeholder="Aktualne hasło"
                required
                disabled={loading}
              />
              <label htmlFor="currentPassowrd">Aktualne hasło</label>
            </div>
            <div className="change-pw-modal__content__form-field">
              <input
                className={`change-pw-modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="password"
                id="newPassword"
                autoComplete="password"
                ref={newPasswordRef}
                placeholder="Nowe hasło"
                required
                disabled={loading}
              />
              <label htmlFor="newPassword">Nowe hasło</label>
            </div>
            <div className="change-pw-modal__content__form-field">
              <input
                className={`change-pw-modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="password"
                id="checkPassword"
                autoComplete="password"
                ref={checkPassworRef}
                placeholder="Powtórz hasło"
                required
                disabled={loading}
              />
              <label htmlFor="checkPassword">Powtórz hasło</label>
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
