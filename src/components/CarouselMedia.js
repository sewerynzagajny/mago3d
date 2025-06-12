export default function CarouselMedia({
  item,
  zoomed,
  dragging,
  drag,
  scale,
  origin,
  isModal,
  cursorStyle,
}) {
  if (item.type === "video") {
    return (
      <div className={isModal ? "" : "video-carousel-frame"}>
        <figure>
          <video
            controls
            className={`carousel__media--video${
              zoomed ? " carousel__media--zoomed" : ""
            }`}
            autoPlay
            loop
            muted
            playsInline
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
                    zIndex: zoomed ? 10001 : "auto",
                  }
                : {}),
              ...cursorStyle,
              cursor: zoomed && dragging ? "grabbing" : cursorStyle.cursor,
              pointerEvents: "none",
            }}
          >
            <source src={item.src} type="video/mp4" />
            Twoja przeglądarka nie obsługuje wideo.
          </video>
        </figure>
      </div>
    );
  }
  return (
    <div className={isModal ? "" : "photo-carousel-frame"}>
      <figure>
        <img
          src={item.src}
          alt={item.alt}
          className={`carousel__media--image${
            zoomed ? " carousel__media--zoomed" : ""
          }`}
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
                  zIndex: zoomed ? 10001 : "auto",
                }
              : {}),
            ...cursorStyle,
            cursor: zoomed && dragging ? "grabbing" : cursorStyle.cursor,
            pointerEvents: "auto",
          }}
        />
      </figure>
    </div>
  );
}
