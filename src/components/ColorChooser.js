export default function ColorChooser({ colors, selectedColor, onColorChange }) {
  if (!colors || colors.length === 0) return null;

  return (
    <div className={`text-color`}>
      <div>Kolor: </div>
      <div className={`text-color`}>
        {colors.map((color) => (
          <button
            type="button"
            onClick={() => onColorChange(color.nameEn)}
            style={{ backgroundColor: color.nameEn }}
            key={color.nameEn}
            className={`text-color--item`}
            title={color.name}
          >
            <div className={`text-color--item--marker`}>
              {selectedColor === color.nameEn ? "✓" : ""}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
