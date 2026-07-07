import Btn from "../Btn";
// import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";

export default function AddressCard({ address, dispatch, modalDispatch }) {
  const {
    id,
    firstName,
    lastName,
    email,
    phonePrefix,
    phone,
    companyName,
    taxId,
    country,
    street,
    postalCode,
    city,
    region,
    isDefaultOrderAddress,
    isDefaultShippingAddress,
  } = address;

  function handleSetDefaultOrderAddress() {
    try {
      //TODO;

      dispatch({ type: "SET_DEFAULT_ORDER", id: address.id });
      toast.success("Ustawiono domyślne dane kupującego!", toastConfig);
    } catch (err) {
      toast.error("Nieudana zmiana danych kupującego!", toastConfig);
    } finally {
      // setLoading(false);
    }
  }

  function handlesetDefaultShippingAddress() {
    try {
      //TODO;

      dispatch({ type: "SET_DEFAULT_SHIPPING", id: address.id });
      toast.success("Ustawiono domyślny adres dostawy!", toastConfig);
    } catch (err) {
      toast.error("Nieudana zmiana adresu dostawy!", toastConfig);
    } finally {
      // setLoading(false);
    }
  }

  function handleDeleteAddress() {
    modalDispatch({
      type: "OPEN",
      payload: {
        status: "usun_adres",
        onConfirm: () => {
          try {
            //TODO;

            dispatch({ type: "DELETE_ADDRESS", id });
            toast.success("Usunięto wybrany adres!", toastConfig);
          } catch (err) {
            toast.error("Nie udało się usunąć wybranego adresu!", toastConfig);
          } finally {
            // setLoading(false);
          }
        },
      },
    });
  }

  return (
    <div className="address-card">
      <div className="frame hover-effect-card">
        <div className="address-card__info">
          <ul className="address-card__info__list">
            <li className="address-card__info__list--item">
              {firstName} {lastName}
            </li>
            <li className="address-card__info__list--item">{companyName}</li>
            <li className="address-card__info__list--item">
              {taxId ? `NIP: ${taxId}` : ""}{" "}
            </li>
            <li className="address-card__info__list--item">{street}</li>
            <li className="address-card__info__list--item">
              {postalCode}, {city}
            </li>
            <li className="address-card__info__list--item">{region}</li>
            <li className="address-card__info__list--item">{country}</li>
            <li className="address-card__info__list--item">{email}</li>
            <li className="address-card__info__list--item">
              {phone ? `${phonePrefix} ${phone}` : ""}
            </li>
          </ul>
          <div className="address-card__info__btn">
            <Btn
              className=" btn address-card__info__btn--link"
              as={Link}
              to={`/panel/adres/${id}`}
            >
              Edytuj
            </Btn>
            <Btn onClick={handleDeleteAddress}>Usuń</Btn>
          </div>
          <div className="address-card__info__buttons">
            {isDefaultOrderAddress ? (
              <span className="address-card__info__buttons--default-address">
                Domyślne dane kupującego
              </span>
            ) : (
              <button
                onClick={handleSetDefaultOrderAddress}
                className="address-card__info__buttons--button"
              >
                Ustaw jako dane kupującego
              </button>
            )}
            {isDefaultShippingAddress ? (
              <span className="address-card__info__buttons--default-address">
                Domyślny adres dostawy
              </span>
            ) : (
              <button
                onClick={handlesetDefaultShippingAddress}
                className="address-card__info__buttons--button"
              >
                Ustaw jako adres dostawy
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
