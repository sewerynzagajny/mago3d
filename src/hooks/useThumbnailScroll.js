import { useState, useRef, useEffect } from "react";

export default function useThumbnailScroll(itemsCount, itemWidth = 120) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const containerRef = useRef(null);

  const scrollAmount = itemWidth * 1; // przewijaj po 3 elementy

  useEffect(() => {
    const updateScrollButtons = () => {
      if (!containerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    // DODAJ: Opóźnij sprawdzenie dla modalu
    const timer = setTimeout(updateScrollButtons, 100);

    updateScrollButtons();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      // DODAJ: Nasłuchuj na resize - ważne dla modalu
      window.addEventListener("resize", updateScrollButtons);

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, [itemsCount]);

  // DODAJ: Dodatkowy useEffect z większym opóźnieniem dla modalu
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }, 500);

    return () => clearTimeout(timer);
  }, [itemsCount]);

  const scrollLeft = () => {
    if (!containerRef.current || !canScrollLeft) return;

    const newPosition = Math.max(0, scrollPosition - scrollAmount);
    setScrollPosition(newPosition);
    containerRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!containerRef.current || !canScrollRight) return;

    const maxScroll =
      containerRef.current.scrollWidth - containerRef.current.clientWidth;
    const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
    setScrollPosition(newPosition);
    containerRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
  };
}
