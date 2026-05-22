import Btn from "../Btn";
import { useUser } from "../../context/UserContex";
import { useState, useReducer } from "react";
import ChangePasswordModal from "./ChangePasswordModal";
import EditProfilModal from "./EditProfilModal";

// const user = {
//   name: "Seweryn",
//   surname: "Zagajny",
//   email: "seweryn.zagajny@gmail.com",
// };
const initialModalState = {
  status: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL_CHANGE_PASSOWRD":
      return { status: "changePassowrd" };
    case "SHOW_MODAL_EDIT_PROFIL":
      return { status: "editProfil" };
    case "HIDE_ALL":
      return { ...initialModalState };
    default:
      throw new Error("actiom unknow");
  }
};

export default function AccountSettings() {
  //uzytkownik

  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const { firstName, lastName, email } = user;
  const [{ status }, dispatch] = useReducer(reducer, initialModalState);

  function handleShowChangePasswordModal() {
    dispatch({ type: "SHOW_MODAL_CHANGE_PASSOWRD" });
  }

  function handleShowEditProfilModal() {
    dispatch({ type: "SHOW_MODAL_EDIT_PROFIL" });
  }

  function handleModalClose() {
    dispatch({ type: "HIDE_ALL" });
  }

  return (
    <>
      {status === "changePassowrd" && (
        <ChangePasswordModal
          loading={loading}
          setLoading={setLoading}
          onClose={handleModalClose}
        />
      )}
      {status === "editProfil" && (
        <EditProfilModal
          loading={loading}
          setLoading={setLoading}
          onClose={handleModalClose}
        />
      )}
      <div id="ustawienia" className="account-settings">
        <h4 className="heading-fourth">Ustawienia konta</h4>
        <div className="frame hover-effect-card">
          <div className="account-settings__info">
            <p className="account-settings__info--name">
              {firstName} {lastName}
            </p>
            <p className="account-settings__info--email">{email}</p>
            <div className="account-settings__info__btn">
              <Btn onClick={handleShowEditProfilModal}>Edytuj profil</Btn>
              <Btn onClick={handleShowChangePasswordModal}>Zmień hasło</Btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
