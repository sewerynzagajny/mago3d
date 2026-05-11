import Btn from "../Btn";

export default function AddEditAdress() {
  return (
    <div className="add-edit-adress">
      <h2 className="heading-second">Nowy adres</h2>
      <form className="add-edit-adress__form">
        <label className="add-edit-adress__form__label">
          *Imię
          <input type="text" className="add-edit-adress__form__input" />
        </label>

        <label className="add-edit-adress__form__label">
          *Nazwisko
          <input type="text" className="add-edit-adress__form__input" />
        </label>

        <label className="add-edit-adress__form__label">
          *Telefon
          <input type="tel" className="add-edit-adress__form__input" />
          <span className="add-edit-adress__form__hint">
            Format liczbowy, np.: 82345678
          </span>
        </label>

        <label className="add-edit-adress__form__label">
          Nazwa firmy
          <input type="text" className="add-edit-adress__form__input" />
        </label>

        <label className="add-edit-adress__form__label">
          NIP
          <input type="text" className="add-edit-adress__form__input" />
        </label>

        <label className="add-edit-adress__form__label">
          Kraj
          <input
            type="text"
            className="add-edit-adress__form__input"
            defaultValue="Polska"
          />
        </label>

        <label className="add-edit-adress__form__label">
          *Ulica i nr domu
          <input type="text" className="add-edit-adress__form__input" />
          <span className="add-edit-adress__form__hint">
            Np.: Maciejkowa 88/24
          </span>
        </label>

        <label className="add-edit-adress__form__label">
          *Kod pocztowy
          <input type="text" className="add-edit-adress__form__input" />
          <span className="add-edit-adress__form__hint">
            Format dla Polski: xx-xxx
          </span>
        </label>

        <label className="add-edit-adress__form__label">
          *Miasto
          <input type="text" className="add-edit-adress__form__input" />
        </label>

        <label className="add-edit-adress__form__label">
          Województwo
          <input type="text" className="add-edit-adress__form__input" />
        </label>

        <label className="add-edit-adress__form__checkbox">
          <input type="checkbox" />
          Ustaw jako domyślny adres do zamówienia
        </label>

        <label className="add-edit-adress__form__checkbox">
          <input type="checkbox" />
          Ustaw jako domyślny adres dostawy
        </label>

        <div className="add-edit-adress__form__btns">
          <Btn>Wstecz</Btn>
          <Btn>Dodaj</Btn>
        </div>
      </form>
    </div>
  );
}
