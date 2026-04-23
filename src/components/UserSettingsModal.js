import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";

export default function UserSettingsModal({
  userSettingsOpen,
  setuserSettingsOpen,
  setIsLogin,
}) {
  function handleCloseSettingsMenu() {
    setuserSettingsOpen(false);
  }

  function handleLogout() {
    setIsLogin(false);
    setuserSettingsOpen(false);
    toast.success("Wylogowano pomyślnie!", toastConfig);
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
        <span className="user-setings-modal__header--icon">S</span>
        <p className="user-setings-modal__header--text">
          Witaj,
          <br /> seweryn.zagajny@gmail.com
        </p>
      </div>
      <ul className="user-setings-modal__list">
        <li>
          <Link to="/zamowienia" onClick={handleCloseSettingsMenu}>
            Zamówienia
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/koszyk" onClick={handleCloseSettingsMenu}>
            Koszyk
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/ustawienia" onClick={handleCloseSettingsMenu}>
            Ustawienia konta
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/adresy" onClick={handleCloseSettingsMenu}>
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
