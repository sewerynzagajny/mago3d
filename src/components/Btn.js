import React from "react";

export default function Btn({ children, className = "btn" }) {
  return <button className={className}>{children}</button>;
}
