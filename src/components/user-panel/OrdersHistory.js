const orders = [
  {
    id: 8,
    date: "30 grudzień 2025",
    total: "139,00",
    status: "złożone",
    tracking: null,
  },
  {
    id: 7,
    date: "29 grudzień 2025",
    total: "139,00",
    status: "złożone",
    tracking: null,
  },
  {
    id: 6,
    date: "15 grudzień 2025",
    total: "10,00",
    status: "złożone",
    tracking: null,
  },
  {
    id: 5,
    date: "02 grudzień 2025",
    total: "10,00",
    status: "złożone",
    tracking: null,
  },
  {
    id: 4,
    date: "01 grudzień 2025",
    total: "10,00",
    status: "złożone",
    tracking: null,
  },
];

export default function OrdersHistory() {
  return (
    <div id="zamowienia" className="orders">
      <h4 className="heading-fourth">Zamówienia</h4>
      <div className="orders__table">
        <div className="orders__row orders__row--header">
          <span>Numer zamówienia</span>
          <span>Data</span>
          <span>Wartość</span>
          <span>Status</span>
          <span>Przesyłka</span>
        </div>
        {orders.map((order) => (
          <div className="orders__row" key={order.id}>
            <span className="orders__order-id">Zamówienie nr: {order.id}</span>
            <span>{order.date}</span>
            <span>{order.total} zł</span>
            <span>
              <span className="orders__status-badge">{order.status}</span>
            </span>
            <span>{order.tracking ?? "–"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
