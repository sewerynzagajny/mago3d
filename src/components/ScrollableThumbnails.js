import useThumbnailScroll from "../hooks/useThumbnailScroll";

export default function ScrollableThumbnails({
  items,
  currentIndex,
  onThumbnailClick,
  isModal = false,
}) {
  const {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
  } = useThumbnailScroll(items.length);

  return (
    <div
      className={`carousel__thumbnails-wrapper${
        isModal ? " carousel__thumbnails-wrapper--modal" : ""
      }`}
      style={isModal ? { padding: "0 2rem" } : {}}
    >
      {canScrollLeft && (
        <button
          className="carousel__thumbnails-scroll carousel__thumbnails-scroll--left"
          onClick={scrollLeft}
          aria-label="Przewiń miniaturki w lewo"
        >
          &#10094;
        </button>
      )}

      <div ref={containerRef} className="carousel__thumbnails">
        {items.map((item, idx) => (
          <button
            key={idx}
            className={`carousel__thumbnail${
              idx === currentIndex ? " active" : ""
            }`}
            onClick={() => onThumbnailClick(idx)}
            aria-label={`Przejdź do slajdu ${idx + 1}`}
            tabIndex={0}
          >
            {item.type === "video" ? (
              <video
                className="carousel__thumbnail-media"
                src={item.src}
                muted
                preload="metadata"
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="carousel__thumbnail-media"
              />
            )}
          </button>
        ))}
      </div>

      {canScrollRight && (
        <button
          className="carousel__thumbnails-scroll carousel__thumbnails-scroll--right"
          onClick={scrollRight}
          aria-label="Przewiń miniaturki w prawo"
        >
          &#10095;
        </button>
      )}
    </div>
  );
}
