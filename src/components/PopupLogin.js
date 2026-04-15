import { useState, useRef } from "react";
import Button from "./Btn";
// import AJAX from "../utils/AJAX";
import Spinner from "./Spinner";
// import { LoginAPI } from "../utils/Api";
import { useAuth } from "../context/AuthContext";

export default function PopupLogin({
  setPopupLoginVisible,
  setPopupRegistractionVisible,
  loading,
  setLoading,
  setLoginCheck,
  getFoodItems,
  getKcalItems,
}) {
  const { setIsLogin } = useAuth();
  const [email, setEmail] = useState("");
  const passwordRef = useRef(null);
  const honeypotRef = useRef(null); // Ref do ukrytego pola honeypot

  function handleCancelLogin() {
    setPopupLoginVisible(false);
  }

  async function handleSubmitLogin(e) {
    e.preventDefault();
    const userLoginData = { email: email, password: passwordRef.current.value };
    // setLoading(true);
    try {
      //TODO;
      //Logika logiki
      // const response = await AJAX(LoginAPI, userLoginData);
      // localStorage.setItem("token", response.token);
      // setLoginCheck(true);
      // await getFoodItems?.(response.token);
      // await getKcalItems?.(response.token);
      setIsLogin(true);
    } catch (err) {
      alert(err.message);
    } finally {
      // setLoading(false);
      setPopupLoginVisible(false);
    }
  }

  function handleRegistraction(e) {
    setPopupLoginVisible(false);
    setPopupRegistractionVisible(true);
  }

  return (
    <div className="popup_login">
      <div className="popup_login__modal frame">
        <button
          type="button"
          className={`popup_login__modal-btn_close ${loading ? "button--loading" : ""}`}
          aria-label="Zamknij"
          onClick={handleCancelLogin}
          disabled={loading}
        >
          ×
        </button>
        <div className="popup_login__content">
          <div className="popup_login__content__header">
            <h2 className="popup_login__content__header-headline">Logowanie</h2>
          </div>
          <form
            className="popup_login__content__form"
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
            <div className="popup_login__content__form-field">
              <input
                className={`popup_login__content__form-field--input ${loading ? "loading" : ""}`}
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
            <div className="popup_login__content__form-field">
              <input
                className={`popup_login__content__form-field--input ${loading ? "loading" : ""}`}
                type="password"
                id="password"
                autoComplete="password"
                ref={passwordRef}
                placeholder="Hasło"
                required
                disabled={loading}
              />
              <label htmlFor="password">Hasło</label>
            </div>
            <Button
              type="submit"
              style={{
                animation: "moveInBotton 0.5s backwards ease-in-out 0.3s",
              }}
              loading={loading}
            >
              {loading ? <Spinner /> : "Zaloguj się"}
            </Button>
          </form>
          <div className="popup_login__content-registration">
            <p className="popup_login__content-registration-text">
              Nie masz jeszcze konta?{" "}
              <button
                className={`popup_login__content-registration-text--btn_registration ${loading ? "button--loading" : ""}`}
                disabled={loading}
                onClick={handleRegistraction}
              >
                Zarejestruj się
              </button>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
