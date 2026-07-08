import { useState } from "react";

export default function PermitChecklist() {
  const [test, setTest] = useState(false);
  const [test2, setTest2] = useState(false);
  const [test3, setTest3] = useState(false);
  return (
    <div className="permit-checklist">
      <div className="frame hover-effect-card u-margin-bottom-medium">
        <div className="permit-checklist__content">
          <div className="checkbox ">
            <button
              type="button"
              className="text-color--item checkbox--btn"
              onClick={() => setTest(!test)}
            >
              <div className="text-color--item--marker">{test ? "✓" : ""}</div>
            </button>
            <label className="u-font-size" onClick={() => setTest(!test)}>
              *Znam i akceptuję regulamin sklepu internetowego
            </label>
            <input
              type="checkbox"
              name=""
              checked={test}
              onChange={(e) => setTest(e.target.checked)}
              style={{ display: "none" }}
            />
          </div>
          <div className="checkbox ">
            <button
              type="button"
              className="text-color--item checkbox--btn"
              onClick={() => setTest2(!test2)}
            >
              <div className="text-color--item--marker">{test2 ? "✓" : ""}</div>
            </button>
            <label className="u-font-size" onClick={() => setTest2(!test2)}>
              *Znam i akceptuję regulamin Paczkomat 24/7
            </label>
            <input
              type="checkbox"
              name=""
              checked={test2}
              onChange={(e) => setTest2(e.target.checked)}
              style={{ display: "none" }}
            />
          </div>
          <div className="checkbox ">
            <button
              type="button"
              className="text-color--item checkbox--btn"
              onClick={() => setTest3(!test3)}
            >
              <div className="text-color--item--marker">{test3 ? "✓" : ""}</div>
            </button>
            <label className="u-font-size" onClick={() => setTest3(!test3)}>
              Chcę otrzymać fakturę
            </label>
            <input
              type="checkbox"
              name=""
              checked={test3}
              onChange={(e) => setTest3(e.target.checked)}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
