import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextItem() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function prevItem() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }

  return (
    <div className="carousel">
      <div className="carousel__main-view">
        <button
          className="carousel__main-view__button carousel__button--prev"
          onClick={prevItem}
          aria-label="Poprzedni"
        >
          &#10094;
        </button>
        <div className="carousel__main-view__item ">
          {items[currentIndex].type === "video" ? (
            <div className="video-frame">
              <figure>
                <video
                  controls
                  className="carousel__media--video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={items[currentIndex].src} type="video/mp4" />
                  Twoja przeglądarka nie obsługuje wideo.
                </video>
              </figure>
            </div>
          ) : (
            <div className="photo-frame">
              <figure>
                <img
                  src={items[currentIndex].src}
                  alt={items[currentIndex].alt}
                  className="carousel__media--image"
                />
              </figure>
            </div>
          )}
        </div>
        <button
          className="carousel__main-view__button carousel__button--next"
          onClick={nextItem}
          aria-label="Następny"
        >
          {" "}
          <span className="carousel__button--icon">&#10095;</span>
        </button>
      </div>
      <div className="carousel__thumbnails">
        {items.map((item, idx) => (
          <button
            key={idx}
            className={`carousel__thumbnail${
              idx === currentIndex ? " active" : ""
            }`}
            onClick={() => setCurrentIndex(idx)}
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
};
