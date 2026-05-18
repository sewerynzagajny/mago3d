import Btn from "../Btn";
import AddressCard from "./AddressCard";
import { Link } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";

// const initialAddresses = [
//   {
//     id: 0,
//     firstName: "Marek",
//     lastName: "Kowalski",
//     phone: "512345678",
//     companyName: "TechBuild Sp. z o.o.",
//     taxId: "1234563218",
//     country: "Polska",
//     street: "Mickiewicza 6/24",
//     postalCode: "00-123",
//     city: "Warszawa",
//     region: "Mazowieckie",
//     isDefaultOrderAddress: true,
//     isDefaultShippingAddress: false,
//   },
//   {
//     id: 1,
//     firstName: "Anna",
//     lastName: "Nowak",
//     phone: "698765432",
//     companyName: "",
//     taxId: "",
//     country: "Polska",
//     street: "Zielona 15",
//     postalCode: "31-456",
//     city: "Kraków",
//     region: "Małopolskie",
//     isDefaultOrderAddress: false,
//     isDefaultShippingAddress: true,
//   },
//   {
//     id: 2,
//     firstName: "Piotr",
//     lastName: "Wiśniewski",
//     phone: "723456789",
//     companyName: "Wiśniewski Usługi",
//     taxId: "9876543210",
//     country: "Polska",
//     street: "Słowackiego 3/7",
//     postalCode: "61-822",
//     city: "Poznań",
//     region: "Wielkopolskie",
//     isDefaultOrderAddress: false,
//     isDefaultShippingAddress: false,
//   },
// ];

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_DEFAULT_ORDER":
//       return state.map((obj) => ({
//         ...obj,
//         isDefaultOrderAddress: obj.id === action.id,
//       }));
//     case "SET_DEFAULT_SHIPPING":
//       return state.map((obj) => ({
//         ...obj,
//         isDefaultShippingAddress: obj.id === action.id,
//       }));
//     case "DELETE_ADDRESS":
//       return state.filter((obj) => obj.id !== action.id);
//     case "ADD_NEW_ADDRESS":
//       return state.map((obj) => ({
//         ...obj,
//       }));
//     default:
//       throw new Error("action unknown");
//   }
// }

export default function AddressDetails({ modalDispatch }) {
  // const [addresses, dispatch] = useReducer(reducer, initialAddresses);
  const { addresses, dispatch } = useAddress();

  return (
    <div className="address-details">
      <h4 className="heading-fourth">Dane Adresowe</h4>
      <Btn
        id="adresy"
        className=" btn address-details__btn"
        as={Link}
        to="/panel/adres/nowy"
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
