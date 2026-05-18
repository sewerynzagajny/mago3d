import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";

const user = {
  email: "seweryn.zagajny@gmail.com",
};

export default function UserSettingsModal({
  userSettingsOpen,
  setuserSettingsOpen,
  setIsLogin,
}) {
  const navigate = useNavigate();
  const location = useLocation();

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
          {user.email[0].toUpperCase()}
        </span>
        <p className="user-setings-modal__header--text">
          Witaj,
          <br /> {user.email}
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
