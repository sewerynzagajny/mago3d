import { useEffect, useRef } from "react";
import useThumbnailScroll from "../hooks/useThumbnailScroll";

export default function ScrollableThumbnails({
  items,
  currentIndex,
  onThumbnailClick,
  isModal = false,
  thumbnailObjectPosition = "bottom center",
}) {
  const {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
  } = useThumbnailScroll(items.length);

  const thumbnailRefs = useRef([]);

  // Przewiń do aktywnej miniatury przy zmianie currentIndex
  useEffect(() => {
    const activeThumbnail = thumbnailRefs.current[currentIndex];
    if (activeThumbnail && containerRef.current) {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const thumbnailRect = activeThumbnail.getBoundingClientRect();

      // Sprawdź czy miniatura jest poza widokiem
      const isOutOfView =
        thumbnailRect.left < containerRect.left ||
        thumbnailRect.right > containerRect.right;

      if (isOutOfView) {
        activeThumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex, containerRef]);

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
            ref={(el) => (thumbnailRefs.current[idx] = el)}
            className={`carousel__thumbnail${
              idx === currentIndex ? " active" : ""
            }`}
            onClick={() => onThumbnailClick(idx)}
            aria-label={`Przejdź do slajdu ${idx + 1}`}
            tabIndex={0}
          >
            {item.type === "video" ? (
              // <video
              //   className="carousel__thumbnail-media"
              //   src={item.src}
              //   muted
              //   preload="metadata"
              // />
              <div className="carousel__thumbnail-video">
                {item.poster ? (
                  <>
                    <img
                      src={item.poster}
                      alt={item.alt}
                      className="carousel__thumbnail-media"
                      style={{ objectPosition: thumbnailObjectPosition }}
                    />
                    <div className="carousel__thumbnail-play-overlay">
                      <span>▶</span>
                    </div>
                  </>
                ) : (
                  <div className="carousel__thumbnail-placeholder">
                    <span>▶</span>
                  </div>
                )}
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="carousel__thumbnail-media"
                style={{ objectPosition: thumbnailObjectPosition }}
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
