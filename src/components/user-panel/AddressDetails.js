import Btn from "../Btn";
import AddressCard from "./AddressCard";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../config/toastConfig";

export default function AddressDetails({ modalDispatch }) {
  const { addresses, dispatch } = useAddress();
  const MAX_ADRESSES = 4;
  const isMaxAdress = addresses.length === MAX_ADRESSES;
  const navigate = useNavigate();

  function handleClick() {
    if (isMaxAdress) {
      return toast.warning(
        `Możesz dodać max. ${MAX_ADRESSES} adresy!`,
        toastConfig,
      );
    }
    return navigate("/panel/adres/nowy");
  }

  return (
    <div className="address-details">
      <h4 className="heading-fourth">Dane Adresowe</h4>
      <Btn
        id="adresy"
        className=" btn address-details__btn"
        onClick={handleClick}
      >
        Dodaj adres
      </Btn>
      <div className="address-details__cards">
        {addresses.map((address, i) => (
          <AddressCard
            key={address.id}
            address={address}
            dispatch={dispatch}
            modalDispatch={modalDispatch}
          />
        ))}
      </div>
    </div>
  );
}
