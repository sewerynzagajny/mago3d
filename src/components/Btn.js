import React from "react";

export default function Btn({
  children,
  className = "btn",
  hrefClassName = "btn_href",
  type = "",
  loading,
  onClick,
  href,
}) {
  if (href) {
    return (
      <a
        href={href}
        className={`${className} ${hrefClassName}`}
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
