import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function Carousel({
  items,
  onItemClick,
  initialIndex = 0,
  isModal = false,
  zoomed = false,
  onResetZoom,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // eslint-disable-next-line no-unused-vars
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragOrigin = useRef({ x: 0, y: 0 });

  const scale = 1.7; // lub 3 jeśli chcesz większy zoom

  const mainViewRef = useRef(null);

  function clamp(val, min, max) {
    return Math.max(min, Math.min(val, max));
  }

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  function nextItem() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function prevItem() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }

  const cursorStyle =
    isModal && zoomed
      ? { cursor: "grab" }
      : isModal
      ? { cursor: "zoom-in" }
      : {};

  return (
    <div
      className={`carousel${isModal ? " carousel--modal" : ""}${
        zoomed ? " carousel--zoomed" : ""
      }`}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="carousel__main-view">
        <button
          className="carousel__main-view__button carousel__button--prev"
          onClick={() => {
            prevItem();
            if (onResetZoom) onResetZoom();
          }}
          aria-label="Poprzedni"
        >
          &#10094;
        </button>
        <div
          ref={mainViewRef}
          className="carousel__main-view__item "
          // onClick={() => onItemClick && onItemClick(currentIndex)}
          onClick={(e) => {
            if (onItemClick && !zoomed) {
              // otwieranie modala
              onItemClick(currentIndex);
            } else if (zoomed && isModal) {
              // nie rób nic jeśli już zoomed
            } else if (isModal && !zoomed) {
              // ustaw punkt zoom
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              setOrigin({ x: `${x}%`, y: `${y}%` });
              if (onItemClick) onItemClick(currentIndex);
            }
          }}
          onMouseDown={(e) => {
            if (!zoomed) return;
            setDragging(true);
            dragStart.current = { x: e.clientX, y: e.clientY };
            dragOrigin.current = { x: drag.x, y: drag.y };
          }}
          onMouseMove={(e) => {
            if (!zoomed || !dragging) return;
            const container = mainViewRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const containerWidth = rect.width;
            const containerHeight = rect.height;

            // Rozmiar powiększonego obrazka
            const imgWidth = containerWidth * scale;
            const imgHeight = containerHeight * scale;

            // Maksymalne przesunięcie (w obie strony)
            const maxX = (imgWidth - containerWidth) / 2;
            const maxY = (imgHeight - containerHeight) / 2;

            let nextX =
              dragOrigin.current.x + (e.clientX - dragStart.current.x);
            let nextY =
              dragOrigin.current.y + (e.clientY - dragStart.current.y);

            // Ogranicz przesuwanie
            nextX = clamp(nextX, -maxX, maxX);
            nextY = clamp(nextY, -maxY, maxY);

            setDrag({
              x: nextX,
              y: nextY,
            });
          }}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          style={{
            ...cursorStyle,
            cursor: zoomed ? "grabbing" : cursorStyle.cursor,
            pointerEvents: "auto",
          }}
        >
          {items[currentIndex].type === "video" ? (
            <div className={isModal ? "" : "video-carousel-frame"}>
              <figure>
                <video
                  controls
                  // className="carousel__media--video"
                  className={`carousel__media--video${
                    zoomed ? " carousel__media--zoomed" : ""
                  }`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  // style={
                  //   isModal
                  //     ? {
                  //         maxHeight: "98vh",

                  //         height: "auto",
                  //       }
                  //     : {}
                  // }
                  style={{
                    ...(isModal
                      ? {
                          maxHeight: zoomed ? "auto" : "98vh",
                          width: "100%",
                          transform: zoomed
                            ? `scale(${scale}) translate(${drag.x / scale}px, ${
                                drag.y / scale
                              }px)`
                            : "none",
                          // transformOrigin: zoomed
                          //   ? `${origin.x} ${origin.y}`
                          //   : "50% 50%",
                          zIndex: zoomed ? 10001 : "auto",
                        }
                      : {}),
                    ...cursorStyle,
                    cursor:
                      zoomed && dragging ? "grabbing" : cursorStyle.cursor,
                    pointerEvents: "none",
                  }}
                >
                  <source src={items[currentIndex].src} type="video/mp4" />
                  Twoja przeglądarka nie obsługuje wideo.
                </video>
              </figure>
            </div>
          ) : (
            <div className={isModal ? "" : "photo-carousel-frame"}>
              <figure>
                <img
                  src={items[currentIndex].src}
                  alt={items[currentIndex].alt}
                  // className="carousel__media--image"
                  className={`carousel__media--image${
                    zoomed ? " carousel__media--zoomed" : ""
                  }`}
                  // style={
                  //   isModal
                  //     ? {
                  //         transform: "none",
                  //         maxHeight: "98vh",

                  //         height: "auto",
                  //       }
                  //     : {}
                  // }
                  style={{
                    ...(isModal
                      ? {
                          maxHeight: zoomed ? "auto" : "98vh",
                          width: "100%",
                          transform: zoomed
                            ? `scale(${scale}) translate(${drag.x / scale}px, ${
                                drag.y / scale
                              }px)`
                            : "none",
                          // transformOrigin: zoomed
                          //   ? `${origin.x} ${origin.y}`
                          //   : "50% 50%",
                          zIndex: zoomed ? 10001 : "auto",
                        }
                      : {}),
                    ...cursorStyle,
                    cursor:
                      zoomed && dragging ? "grabbing" : cursorStyle.cursor,
                    pointerEvents: "auto",
                  }}
                />
              </figure>
            </div>
          )}
        </div>
        <button
          className="carousel__main-view__button carousel__button--next"
          onClick={() => {
            nextItem();
            if (onResetZoom) onResetZoom();
          }}
          aria-label="Następny"
        >
          {" "}
          <span className="carousel__button--icon">&#10095;</span>
        </button>
      </div>
      <div
        className="carousel__thumbnails"
        style={isModal ? { padding: "0 2rem" } : {}}
      >
        {items.map((item, idx) => (
          <button
            key={idx}
            className={`carousel__thumbnail${
              idx === currentIndex ? " active" : ""
            }`}
            onClick={() => {
              setCurrentIndex(idx);
              if (onResetZoom) onResetZoom();
              // if (onItemClick && !isModal) onItemClick(idx);
            }}
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
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video"]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  onItemClick: PropTypes.func,
  initialIndex: PropTypes.number,
  isModal: PropTypes.bool,
  zoomed: PropTypes.bool,
};
