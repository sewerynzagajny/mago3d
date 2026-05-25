import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import { useUser } from "../context/UserContex";

export default function UserSettingsModal({
  userSettingsOpen,
  setuserSettingsOpen,
  setIsLogin,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useUser();
  const { firstName, lastName, email } = user;
  const welcomeUser = () => {
    if (firstName) return firstName;
    else if (!firstName && lastName) return lastName;
    else return email;
  };

  function handleCloseSettingsMenu() {
    setuserSettingsOpen(false);
  }

  function handleLogout() {
    setIsLogin(false);
    setuserSettingsOpen(false);
    toast.success("Wylogowano pomyślnie!", toastConfig);
    if (location.pathname === "/panel" || "/panel/adres") {
      navigate("/");
    }
  }
  return (
    <div
      className={`user-setings-modal ${userSettingsOpen ? "user-setings-modal--active" : ""}`}
    >
      {" "}
      <button
        className="user-setings-modal__btn"
        onClick={handleCloseSettingsMenu}
      >
        ✖
      </button>
      <div className="user-setings-modal__header">
        <span className="user-setings-modal__header--icon">
          {welcomeUser()[0].toUpperCase()}
        </span>
        <p className="user-setings-modal__header--text">
          Witaj,
          <br /> {welcomeUser()}
        </p>
      </div>
      <ul className="user-setings-modal__list">
        <li>
          <Link to="/panel#koszyk" onClick={handleCloseSettingsMenu}>
            Koszyk
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/panel#zamowienia" onClick={handleCloseSettingsMenu}>
            Zamówienia
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/panel#ustawienia" onClick={handleCloseSettingsMenu}>
            Ustawienia konta
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/panel#adresy" onClick={handleCloseSettingsMenu}>
            Dane adresowe
          </Link>
        </li>
        <li className="user-setings-modal__list--item" onClick={handleLogout}>
          Wyloguj
        </li>
      </ul>
    </div>
  );
}
