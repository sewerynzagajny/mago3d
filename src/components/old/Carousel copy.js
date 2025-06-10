import React, { useState } from "react";
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
      <button
        className="carousel__button carousel__button--prev"
        onClick={prevItem}
        aria-label="Poprzedni"
      >
        &#10094;
      </button>
      <div className="carousel__item">
        {items[currentIndex].type === "video" ? (
          <video controls className="carousel__media">
            <source src={items[currentIndex].src} type="video/mp4" />
            Twoja przeglądarka nie obsługuje wideo.
          </video>
        ) : (
          <img
            src={items[currentIndex].src}
            alt={items[currentIndex].alt}
            className="carousel__media"
          />
        )}
      </div>
      <button
        className="carousel__button carousel__button--next"
        onClick={nextItem}
        aria-label="Następny"
      >
        &#10095;
      </button>
      <div className="carousel__indicator">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`carousel__dot${idx === currentIndex ? " active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Przejdź do slajdu ${idx + 1}`}
          />
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
