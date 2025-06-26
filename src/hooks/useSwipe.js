import { useRef, useEffect } from "react";

export default function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
  threshold = 90, // domyślnie wyższa wartość
  velocityThreshold = 0.6, // domyślnie wyższa prędkość
  preventDefaultTouchAction = false,
  preventPageScroll = true,
}) {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchStartTime = useRef(null);
  const isSwiping = useRef(false);

  // Blokuj scroll całej strony gdy aktywny swipe
  useEffect(() => {
    if (!preventPageScroll) return;

    const preventScroll = (e) => {
      if (isSwiping.current) {
        e.preventDefault();
      }
    };

    // Dodaj listenery na document
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
    };
  }, [preventPageScroll]);

  function handleTouchStart(e) {
    if (!enabled || e.touches.length !== 1) return;

    if (preventDefaultTouchAction) {
      e.preventDefault();
    }

    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();

    // Oznacz że rozpoczyna się swipe
    if (preventPageScroll) {
      isSwiping.current = true;
    }
  }

  function handleTouchMove(e) {
    if (!enabled) return;

    if (preventDefaultTouchAction) {
      e.preventDefault();
    }
  }

  function handleTouchEnd(e) {
    // Reset flag dla scroll strony
    isSwiping.current = false;
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
