import { useState, useRef } from "react";
import Button from "./Btn";
// import AJAX from "../utils/AJAX";
import Spinner from "./Spinner";
// import { LoginAPI } from "../utils/Api";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import { useUser } from "../context/UserContex";

export default function LoginModal({
  onClose,
  onSwitchToRegistration,
  onSwitchToForgotPassword,
  loading,
  setLoading,
}) {
  const { setIsLogin } = useAuth();
  const { user } = useUser();
  const [email, setEmail] = useState("");
  const passwordRef = useRef(null);
  const honeypotRef = useRef(null);

  function handleCancelLogin() {
    onClose();
  }

  function compareObj(obj1, obj2) {
    return Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
  }

  async function handleSubmitLogin(e) {
    e.preventDefault();
    const userLoginData = { email: email, password: passwordRef.current.value };
    const userAccaunt = {
      email: user?.email || "",
      password: user?.password || "",
    };
    // setLoading(true);
    try {
      //TODO;
      //Logika logiki
      // const response = await AJAX(LoginAPI, userLoginData);
      // localStorage.setItem("token", response.token);
      // setLoginCheck(true);
      // await getFoodItems?.(response.token);
      // await getKcalItems?.(response.token);
      const isTheSame = compareObj(userLoginData, userAccaunt);
      if (isTheSame && user) {
        setIsLogin(true);
        toast.success("Zalogowano pomyślnie!", toastConfig);
        onClose();
      } else {
        toast.error("Logowanie nieudane!", toastConfig);
        setEmail("");
        passwordRef.current.value = "";
      }
    } catch (err) {
      toast.error("Logowanie nieudane!", toastConfig);
    } finally {
      // setLoading(false);
      // onClose();
    }
  }

  function handleRegistraction(e) {
    onClose();
    onSwitchToRegistration();
  }

  function handleForgotPassword(e) {
    onClose();
    onSwitchToForgotPassword();
  }

  return (
    <div className="login_modal">
      <div className="login_modal__modal frame">
        <button
          type="button"
          className={`login_modal__modal-btn_close ${loading ? "button--loading" : ""}`}
          aria-label="Zamknij"
          onClick={handleCancelLogin}
          disabled={loading}
        >
          ×
        </button>
        <div className="login_modal__content">
          <div className="login_modal__content__header">
            <h2 className="login_modal__content__header-headline">Logowanie</h2>
          </div>
          <form
            className="login_modal__content__form"
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
            <div className="login_modal__content__form-field">
              <input
                className={`login_modal__content__form-field--input ${loading ? "loading" : ""}`}
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
            <div className="login_modal__content__form-field">
              <input
                className={`login_modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="password"
                id="password"
                autoComplete="current-password"
                ref={passwordRef}
                placeholder="Hasło"
                required
                disabled={loading}
              />
              <label htmlFor="password">Hasło</label>
            </div>
            <Button
              className={` btn ${loading ? "loading" : ""}`}
              type="submit"
              style={{
                animation: "moveInBotton 0.5s backwards ease-in-out 0.3s",
              }}
              loading={loading}
            >
              {loading ? <Spinner /> : "Zaloguj się"}
            </Button>
          </form>
          <div className="login_modal__content-forgot_password">
            <p className="login_modal__content-forgot_password-text">
              <button
                className={`login_modal__content-forgot_password-text--btn${loading ? "button--loading" : ""}`}
                disabled={loading}
                onClick={handleForgotPassword}
              >
                Nie pamietasz hasła?
              </button>{" "}
            </p>
          </div>
          <div className="login_modal__content-registration">
            <p className="login_modal__content-registration-text">
              Nie masz jeszcze konta?{" "}
              <button
                className={`login_modal__content-registration-text--btn${loading ? "button--loading" : ""}`}
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
