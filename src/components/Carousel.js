import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CarouselMedia from "./CarouselMedia";
import useDragZoom from "../hooks/useDragZoom"; // Importujemy hook do drag/zoom
import useSwipe from "../hooks/useSwipe";

export default function Carousel({
  items,
  onItemClick,
  initialIndex = 0,
  isModal = false,
  zoomed = false,
  onResetZoom,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const [fade, setFade] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0); // Nowy stan

  const scale = 1.7;
  const mainViewRef = useRef(null);
  const mediaContainerRef = useRef(null);

  // Hook drag/zoom
  const { drag, dragging, handleStart, handleMove, handleEnd, setDrag } =
    useDragZoom({ zoomed, scale, mainViewRef });

  // Obserwuj wysokość elementów
  useEffect(() => {
    if (mediaContainerRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const height = entry.contentRect.height;
          if (height > 0) {
            setContainerHeight(height);
          }
        }
      });

      observer.observe(mediaContainerRef.current);
      return () => observer.disconnect();
    }
  }, [currentIndex]);

  // Ustaw fade na true przy pierwszym renderze
  useEffect(() => {
    setFade(true);
  }, []);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (!isModal) {
        if (
          (e.key === "Enter" || e.key === "NumpadEnter") &&
          typeof onItemClick === "function"
        ) {
          onItemClick(currentIndex); // otwórz modal z aktualnym indeksem
          return;
        }
        if (e.key === "ArrowRight") {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
          setDrag({ x: 0, y: 0 });
          if (onResetZoom) onResetZoom();
        }
        if (e.key === "ArrowLeft") {
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
          );
          setDrag({ x: 0, y: 0 });
          if (onResetZoom) onResetZoom();
        }
        return;
      }
      if (e.key === "Escape" && onClose) {
        onClose();
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setDrag({ x: 0, y: 0 });
        if (onResetZoom) onResetZoom();
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
        setDrag({ x: 0, y: 0 });
        if (onResetZoom) onResetZoom();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isModal,
    items.length,
    onClose,
    setDrag,
    onResetZoom,
    currentIndex,
    onItemClick,
  ]);

  function nextItem() {
    goToSlide((currentIndex + 1) % items.length);
    setDrag({ x: 0, y: 0 });
  }

  function prevItem() {
    goToSlide((currentIndex - 1 + items.length) % items.length);
    setDrag({ x: 0, y: 0 });
  }

  function goToSlide(newIndex) {
    setFade(false); // reset animacji
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true); // uruchom animację po zmianie
    }, 10);
  }

  const cursorStyle =
    isModal && zoomed
      ? { cursor: "grab" }
      : isModal
      ? { cursor: "zoom-in" }
      : {};

  const swipe = useSwipe({
    onSwipeLeft: () => {
      nextItem();
      if (onResetZoom) onResetZoom();
    },
    onSwipeRight: () => {
      prevItem();
      if (onResetZoom) onResetZoom();
    },
    enabled: !isModal || (isModal && !zoomed),
  });

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
          className={`carousel__main-view__item${fade ? " fade-in" : ""}`}
          onClick={(e) => {
            if (onItemClick && !zoomed) {
              onItemClick(currentIndex);
            } else if (zoomed && isModal) {
              // nic nie rób
            } else if (isModal && !zoomed) {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              setOrigin({ x: `${x}%`, y: `${y}%` });
              if (onItemClick) onItemClick(currentIndex);
            }
          }}
          onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
          onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => {
            swipe.handleTouchStart(e);
            if (isModal && zoomed && e.touches.length === 1) {
              handleStart(e.touches[0].clientX, e.touches[0].clientY);
            }
          }}
          onTouchMove={(e) => {
            if (isModal && zoomed && dragging && e.touches.length === 1) {
              handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
          }}
          onTouchEnd={(e) => {
            swipe.handleTouchEnd(e);
            if (isModal && zoomed) handleEnd();
          }}
          style={{
            ...cursorStyle,
            cursor: zoomed ? "grabbing" : cursorStyle.cursor,
            pointerEvents: "auto",
          }}
        >
          <div ref={mediaContainerRef}>
            {" "}
            {/* Nowy wrapper */}
            <CarouselMedia
              item={items[currentIndex]}
              zoomed={zoomed}
              dragging={dragging}
              drag={drag}
              scale={scale}
              origin={origin}
              isModal={isModal}
              cursorStyle={cursorStyle}
            />
          </div>
        </div>
        <button
          className="carousel__main-view__button carousel__button--next"
          onClick={() => {
            nextItem();
            if (onResetZoom) onResetZoom();
          }}
          aria-label="Następny"
        >
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
              goToSlide(idx);
              setDrag({ x: 0, y: 0 });
              if (onResetZoom) onResetZoom();
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
