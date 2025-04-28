import React from "react";

export default function Btn({
  children,
  className = "btn",
  type = "",
  loading,
  onClick,
  href,
}) {
  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={{
          padding: "1.2rem 2.8rem",
          fontSize: "1.9rem",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={loading}
    >
      {children}
    </button>
  );
}
