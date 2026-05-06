import Btn from "../Btn";

const user = {
  name: "Seweryn",
  surname: "Zagajny",
  email: "seweryn.zagajny@gmail.com",
};

const { name, surname, email } = user;

export default function AccountSettings() {
  return (
    <div id="ustawienia" className="account-settings">
      <h4 className="heading-fourth">Ustawienia konta</h4>
      <div className="frame hover-effect-card">
        <div className="account-settings__info">
          <p className="account-settings__info--name">
            {name} {surname}
          </p>
          <p className="account-settings__info--email">{email}</p>
          <div className="account-settings__info__btn">
            <Btn>Edytuj profil</Btn>
            <Btn>Zmień hasło</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
