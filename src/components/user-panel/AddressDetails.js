import Btn from "../Btn";
const user = {
  name: "Seweryn",
  surname: "Zagajny",
  email: "seweryn.zagajny@gmail.com",
};

const addresses = [
  {
    firstName: "Marek",
    lastName: "Kowalski",
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
    firstName: "Anna",
    lastName: "Nowak",
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
    firstName: "Piotr",
    lastName: "Wiśniewski",
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

const { name, surname, email } = user;

export default function AddressDetails() {
  return (
    <div id="adresy" className="address-details">
      <h4 className="heading-fourth">Dane Adresowe</h4>
      <Btn className=" btn address-details__btn">Dodaj adres</Btn>
      <div className="address-details__container">
        <div className="frame hover-effect-card">
          <div className="address-details__container__info">
            <p className="address-details__container__info--name">
              {name} {surname}
            </p>
            <p className="address-details__container__info--email">{email}</p>
            <div className="address-details__container__info__btn">
              <Btn>Edytuj</Btn>
              <Btn>Usuń</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
