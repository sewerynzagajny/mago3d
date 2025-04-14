import React from "react";

export default function Btn({ children, className = "btn", type = "" }) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
