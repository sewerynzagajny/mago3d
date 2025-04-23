export default function ShortenFilename({ children, maxLength = 20 }) {
  function shortenFilename(filename) {
    if (typeof filename !== "string" || filename.length <= maxLength) {
      return filename;
    }

    const extIndex = filename.lastIndexOf(".");
    const ext = extIndex !== -1 ? filename.slice(extIndex) : "";
    const name = extIndex !== -1 ? filename.slice(0, extIndex) : filename;

    const sliceLength = maxLength - ext.length - 3; // 3 for "..."
    const start = name.slice(0, Math.ceil(sliceLength / 2));
    const end = name.slice(-Math.floor(sliceLength / 4));

    return `${start}...${end}${ext}`;
  }

  // return <span title={children}>{shortenFilename(children)}</span>;
  return <>{shortenFilename(children)}</>;
}
