import { createContext, useReducer, useContext } from "react";

const initialAddresses = [
  {
    id: 0,
    firstName: "Marek",
    lastName: "Kowalski",
    phonePrefix: "+48",
    phone: "512345678",
    companyName: "TechBuild Sp. z o.o.",
    taxId: "1234563218",
    country: "Polska",
    street: "Mickiewicza 6/24",
    postalCode: "00-123",
    city: "Warszawa",
    region: "Mazowieckie",
    isDefaultOrderAddress: true,
    isDefaultShippingAddress: false,
  },
  {
    id: 1,
    firstName: "Anna",
    lastName: "Nowak",
    phonePrefix: "+48",
    phone: "698765432",
    companyName: "",
    taxId: "",
    country: "Polska",
    street: "Zielona 15",
    postalCode: "31-456",
    city: "Kraków",
    region: "Małopolskie",
    isDefaultOrderAddress: false,
    isDefaultShippingAddress: true,
  },
  {
    id: 2,
    firstName: "Piotr",
    lastName: "Wiśniewski",
    phonePrefix: "+48",
    phone: "723456789",
    companyName: "Wiśniewski Usługi",
    taxId: "9876543210",
    country: "Polska",
    street: "Słowackiego 3/7",
    postalCode: "61-822",
    city: "Poznań",
    region: "Wielkopolskie",
    isDefaultOrderAddress: false,
    isDefaultShippingAddress: false,
  },
];

function applyExclusiveDefaults(state, payload) {
  let result = state;
  if (payload.isDefaultOrderAddress) {
    result = result.map((obj) => ({
      ...obj,
      isDefaultOrderAddress: obj.id === payload.id,
    }));
  }
  if (payload.isDefaultShippingAddress) {
    result = result.map((obj) => ({
      ...obj,
      isDefaultShippingAddress: obj.id === payload.id,
    }));
  }
  return result;
}

function applyFallbackDefaults(state) {
  let result = state;
  if (!result.some((el) => el.isDefaultOrderAddress)) {
    result = result.map((obj, i) => ({
      ...obj,
      isDefaultOrderAddress: i === 0,
    }));
  }
  if (!result.some((el) => el.isDefaultShippingAddress)) {
    result = result.map((obj, i) => ({
      ...obj,
      isDefaultShippingAddress: i === 0,
    }));
  }
  return result;
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_DEFAULT_ORDER":
      return state.map((obj) => ({
        ...obj,
        isDefaultOrderAddress: obj.id === action.id,
      }));
    case "SET_DEFAULT_SHIPPING":
      return state.map((obj) => ({
        ...obj,
        isDefaultShippingAddress: obj.id === action.id,
      }));
    case "DELETE_ADDRESS":
      return applyFallbackDefaults(state.filter((obj) => obj.id !== action.id));
    case "ADD_NEW_ADDRESS":
      return applyFallbackDefaults(
        applyExclusiveDefaults([...state, action.payload], action.payload),
      );
    case "EDIT_ADDRESS":
      return applyExclusiveDefaults(
        state.map((obj) =>
          obj.id === action.payload.id ? action.payload : obj,
        ),
        action.payload,
      );
    default:
      throw new Error("action unknown");
  }
}

export const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [addresses, dispatch] = useReducer(reducer, initialAddresses);

  return (
    <AddressContext.Provider value={{ addresses, dispatch }}>
      {children}
    </AddressContext.Provider>
  );
}

export function useAddress() {
  return useContext(AddressContext);
}
