import React from "react";

export default function Btn({
  children,
  className = "btn",
  type = "",
  loading,
}) {
  return (
    <button className={className} type={type} disabled={loading}>
      {children}
    </button>
  );
}
