import { useState, useRef } from "react";
import Button from "./Btn";
// import AJAX from "../utils/AJAX";
import Spinner from "./Spinner";
// import { LoginAPI } from "../utils/Api";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";

export default function ForgotPasswordModal({
  onClose,
  onSwitchToLogin,
  loading,
  setLoading,
}) {
  const { setIsLogin } = useAuth();
  const [email, setEmail] = useState("");
  const passwordRef = useRef(null);
  const honeypotRef = useRef(null); // Ref do ukrytego pola honeypot

  function handleCancelLogin() {
    onClose();
  }
  function handleLogin(e) {
    onClose();
    onSwitchToLogin();
  }

  async function handleSubmitLogin(e) {
    e.preventDefault();
    // const userLoginData = { email: email, password: passwordRef.current.value };
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
      toast.info(
        "Jeśli podany adres istnieje w bazie, wiadomość została wysłana. Link autoryzacyjny jest ważny przez x godzin",
        { ...toastConfig, autoClose: 8000 },
      );
    } catch (err) {
      toast.error("Resetowanie hasła nieudane!", toastConfig);
    } finally {
      // setLoading(false);
      onClose();
    }
  }

  return (
    <div className="forgot-pw_modal">
      <div className="forgot-pw_modal__modal frame">
        <button
          type="button"
          className={`forgot-pw_modal__modal-btn_close ${loading ? "button--loading" : ""}`}
          aria-label="Zamknij"
          onClick={handleCancelLogin}
          disabled={loading}
        >
          ×
        </button>
        <div className="forgot-pw_modal__content">
          <div className="forgot-pw_modal__content__header">
            <h2 className="forgot-pw_modal__content__header-headline">
              Resetowanie hasła
            </h2>
          </div>
          <form
            className="forgot-pw_modal__content__form"
            onSubmit={handleSubmitLogin}
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
            <div className="forgot-pw_modal__content__form-field">
              <input
                className={`forgot-pw_modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adres e-mail"
                required
                disabled={loading}
              />
              <label htmlFor="email">Adres e-mail</label>
            </div>

            <Button
              className={` btn ${loading ? "loading" : ""}`}
              type="submit"
              style={{
                animation: "moveInBotton 0.5s backwards ease-in-out 0.3s",
              }}
              loading={loading}
            >
              {loading ? <Spinner /> : "Zmień hasło"}
            </Button>
          </form>
          <div className="forgot-pw_modal__content-forgot_password">
            <p className="forgot-pw_modal__content-forgot_password-text">
              <button
                className={`forgot-pw_modal__content-forgot_password-text--btn${loading ? "button--loading" : ""}`}
                disabled={loading}
                onClick={handleLogin}
              >
                Wróc do logowania
              </button>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
