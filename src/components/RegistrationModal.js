import { useState, useRef } from "react";
import Button from "./Btn";
// import AJAX from "../utils/AJAX";
import Spinner from "./Spinner";
// import { LoginAPI } from "../utils/Api";
// import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";

export default function RegistrationModal({
  onClose,
  onSwitchToLogin,
  loading,
  setLoading,
}) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  // const { setIsLogin } = useAuth();
  const [email, setEmail] = useState("");
  const passwordRef = useRef(null);
  const checkPassworRef = useRef(null);
  const honeypotRef = useRef(null); // Ref do ukrytego pola honeypot

  function handleCancelRegistration() {
    onClose();
  }

  async function handleSubmitRegistration(e) {
    e.preventDefault();
    const password = (passwordRef.current?.value ?? "").replace(/\s/g, "");
    const confirmPassword = (checkPassworRef.current?.value ?? "").replace(
      /\s/g,
      "",
    );
    setLoading(true);

    if (password.length < 6) {
      toast.error("Hasło musi składać się z minimum 6 znaków!", toastConfig);
      passwordRef.current.value = "";
      checkPassworRef.current.value = "";
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Potwierdzenie hasła nie powiodło się!", toastConfig);
      passwordRef.current.value = "";
      checkPassworRef.current.value = "";
      setLoading(false);
      return;
    }

    if (!termsAccepted) {
      toast.error("Musisz zaakceptować regulamin!", toastConfig);
      setLoading(false);
      return;
    }

    const userRegData = { email: email, password: passwordRef.current.value };
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
      toast.success("Sprawdź e-mail, aby dokończyc rejestrację!", toastConfig);
    } catch (err) {
      toast.error("Rejestracja  nieudana!", toastConfig);
    } finally {
      setLoading(false);
      onClose();
    }
  }

  function handleLogin(e) {
    onClose();
    onSwitchToLogin();
  }

  return (
    <div className="registraction_modal">
      <div className="registraction_modal__modal frame">
        <button
          type="button"
          className={`registraction_modal__modal-btn_close ${loading ? "button--loading" : ""}`}
          aria-label="Zamknij"
          onClick={handleCancelRegistration}
          disabled={loading}
        >
          ×
        </button>
        <div className="registraction_modal__content">
          <div className="registraction_modal__content__header">
            <h2 className="registraction_modal__content__header-headline">
              Rejestracja
            </h2>
          </div>
          <form
            className="registraction_modal__content__form"
            onSubmit={handleSubmitRegistration}
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
              <input
                className={`registraction_modal__content__form-field--input ${loading ? "loading" : ""}`}
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
            <div className="registraction_modal__content__form-field">
              <input
                className={`registraction_modal__content__form-field--input ${loading ? "loading" : ""}`}
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
            <div className="registraction_modal__content__form-field">
              <input
                className={`registraction_modal__content__form-field--input ${loading ? "loading" : ""}`}
                type="password"
                id="password"
                autoComplete="password"
                ref={checkPassworRef}
                placeholder="Powtórz hasło"
                required
                disabled={loading}
              />
              <label htmlFor="password">Powtórz hasło</label>
            </div>
            <div className="registraction_modal__content__form-field registraction_modal__content__form-field--checkbox">
              <button
                type="button"
                className={`text-color--item registraction_modal__content__form-field--checkbox-btn`}
                onClick={() => setTermsAccepted(!termsAccepted)}
                disabled={loading}
              >
                <div className="text-color--item--marker">
                  {termsAccepted ? "✓" : ""}
                </div>
              </button>
              <label
                htmlFor="terms"
                onClick={() => setTermsAccepted(!termsAccepted)}
              >
                *Akceptuję{" "}
                <a
                  href="/regulamin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="registraction_modal__content__form-field--checkbox-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  regulamin
                </a>{" "}
              </label>
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                style={{ display: "none" }}
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
              {loading ? <Spinner /> : "Zarejestruj się"}
            </Button>
          </form>

          <div className="registraction_modal__content-registration">
            <p className="registraction_modal__content-registration-text">
              Hasło powinno mieć min. 6 znaków{" "}
            </p>
          </div>
          <div className="registraction_modal__content-login">
            <p className="registraction_modal__content-login-text">
              Masz już konto?{" "}
              <button
                className={`registraction_modal__content-login-text--btn${loading ? "button--loading" : ""}`}
                disabled={loading}
                onClick={handleLogin}
              >
                Zaloguj się
              </button>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
