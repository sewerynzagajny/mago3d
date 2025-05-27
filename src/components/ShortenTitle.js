import { useState, useEffect, useRef } from "react";

export default function ShortenTitle({ children, wordsNumber }) {
  const [showFull, setShowFull] = useState(false);
  const modalRef = useRef(null);
  const toggleRef = useRef(null);

  function shortenName(filename) {
    const words = filename.split(" ");
    if (typeof filename !== "string" || words.length <= wordsNumber) {
      return filename;
    }
    // return words.slice(0, wordsNumber).join(" ");
    if (wordsNumber) {
      return words.slice(0, wordsNumber).join(" ") + "...";
    } else {
      return words.slice(0, wordsNumber).join(" ");
    }
  }

  useEffect(() => {
    function handleClickOutside(e) {
      // Sprawdzamy, czy kliknięcie było poza modalem i poza toggle
      if (toggleRef.current && !toggleRef.current.contains(e.target)) {
        setShowFull(false);
      }
    }

    if (showFull) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFull]);

  return (
    <>
      <span
        ref={toggleRef} // przypisujemy ref do toggle
        style={{ cursor: "pointer" }}
        onClick={() => setShowFull((prev) => !prev)}
        title={children}
      >
        {shortenName(children)}
      </span>
      {showFull && (
        <div className="modal" ref={modalRef}>
          {children}
        </div>
      )}
    </>
  );
}
