export default function SingleCheckbox({
  children,
  onChange,
  stateChecked,
  name,
  required = false,
  fontSizeClass = "",
  className = "",
}) {
  return (
    <div className={`checkbox ${className}`}>
      <button type="button" className="text-color--item checkbox--btn">
        <div className="text-color--item--marker">
          {stateChecked ? "✓" : ""}
        </div>
      </button>
      <label className={fontSizeClass}>{children}</label>
      <input
        type="checkbox"
        name={name}
        checked={stateChecked}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
