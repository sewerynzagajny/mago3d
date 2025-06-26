import { useRef } from "react";

export default function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
  threshold = 90, // domyślnie wyższa wartość
  velocityThreshold = 0.6, // domyślnie wyższa prędkość
  preventDefaultTouchAction = false,
  preventVerticalScroll = true,
}) {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchStartTime = useRef(null);

  function handleTouchStart(e) {
    if (!enabled || e.touches.length !== 1) return;

    if (preventDefaultTouchAction) {
      e.preventDefault();
    }

    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  }

  function handleTouchMove(e) {
    if (!enabled) return;

    if (preventDefaultTouchAction) {
      e.preventDefault();
      return;
    }
    // Blokuj tylko pionowy scroll jeśli włączone
    if (preventVerticalScroll && touchStartX.current !== null) {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const dx = Math.abs(currentX - touchStartX.current);
      const dy = Math.abs(currentY - touchStartY.current);

      // Jeśli ruch jest bardziej poziomy, blokuj scroll
      if (dx > dy && dx > 10) {
        e.preventDefault();
      }
    }
  }

  function handleTouchEnd(e) {
    if (
      !enabled ||
      touchStartX.current === null ||
      touchStartY.current === null ||
      touchStartTime.current === null
    )
      return;

    if (preventDefaultTouchAction) {
      e.preventDefault();
    }

    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    const deltaTime = Date.now() - touchStartTime.current;

    // Oblicz prędkość (piksele na milisekundę)
    const velocity = Math.abs(dx) / deltaTime;

    // Sprawdź czy ruch jest bardziej poziomy niż pionowy
    const isHorizontal = Math.abs(dx) > Math.abs(dy);

    // Wymagaj odpowiedniego przesunięcia I prędkości I ruchu poziomego
    if (
      Math.abs(dx) > threshold &&
      velocity > velocityThreshold &&
      isHorizontal
    ) {
      if (dx < 0 && onSwipeLeft) onSwipeLeft();
      if (dx > 0 && onSwipeRight) onSwipeRight();
    }

    // Reset wartości
    touchStartX.current = null;
    touchStartY.current = null;
    touchStartTime.current = null;
  }

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
}
