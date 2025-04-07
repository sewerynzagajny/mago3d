import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

ScrollEffectContainer.propTypes = {
  children: PropTypes.node.isRequired,
  totalImages: PropTypes.number,
  threshold: PropTypes.number,
  animationTime: PropTypes.number,
  animationDelay: PropTypes.number,
  animationTransform: PropTypes.string,
  className: PropTypes.string,
  onAllImagesLoaded: PropTypes.func,
};

export default function ScrollEffectContainer({
  children,
  totalImages = 0,
  threshold = 0.1,
  animationTime = 0.6,
  animationDelay = 0,
  animationTransform = "translateY(2rem)",
  className = "",
  onAllImagesLoaded = () => {},
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const containerStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : animationTransform,
    transition: `opacity ${animationTime}s ease ${animationDelay}s, transform ${animationTime}s ease ${animationDelay}s`,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imagesLoaded === totalImages) {
          setIsVisible(true);
          onAllImagesLoaded();
        }
      },
      { threshold }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [imagesLoaded, totalImages, threshold, onAllImagesLoaded]);

  function handleImageLoad() {
    setImagesLoaded((prev) => prev + 1);
  }

  function mapChildrenWithOnLoad(children) {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      // Jeśli dziecko jest obrazem, przypisz onLoad
      if (child.type === "img") {
        return React.cloneElement(child, {
          onLoad: handleImageLoad,
        });
      }

      // Jeśli dziecko ma własne dzieci, rekurencyjnie przeszukaj
      if (child.props && child.props.children) {
        return React.cloneElement(child, {
          children: mapChildrenWithOnLoad(child.props.children),
        });
      }

      return child;
    });
  }

  return (
    <div
      className={`scroll-effect-container ${className}`}
      style={containerStyle}
      ref={containerRef}
    >
      {mapChildrenWithOnLoad(children)}
    </div>
  );
}
