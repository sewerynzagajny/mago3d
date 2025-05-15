import { Link } from "react-router-dom";

export default function Btn({
  children,
  className = "btn",
  hrefClassName = "btn_href",
  type = "",
  loading,
  onClick,
  href,
  to,
  as,
  ...rest
}) {
  if (to && as === Link) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${className} ${hrefClassName}`}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
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
      {...rest}
    >
      {children}
    </button>
  );
}
