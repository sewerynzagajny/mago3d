import { useRef, useEffect } from "react";

export default function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
  threshold = 50, // domyślnie niższa wartość
  velocityThreshold = 0.3, // domyślnie niższa prędkość
  modalThreshold = 90, // wyższa wartość dla modali
  modalVelocityThreshold = 0.6, // wyższa prędkość dla modali
  isModal = false, // czy to modal
  preventDefaultTouchAction = false,
  preventPageScroll = true,
}) {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchStartTime = useRef(null);
  const isSwiping = useRef(false);
  const isHorizontalSwipe = useRef(false);

  // Wybierz odpowiednie progi na podstawie typu
  const activeThreshold = isModal ? modalThreshold : threshold;
  const activeVelocityThreshold = isModal
    ? modalVelocityThreshold
    : velocityThreshold;

  // Blokuj scroll całej strony gdy aktywny swipe
  useEffect(() => {
    if (!preventPageScroll) return;

    const preventScroll = (e) => {
      if (isSwiping.current && isHorizontalSwipe.current) {
        e.preventDefault();
      }
    };

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

    isSwiping.current = true;
    isHorizontalSwipe.current = false;
  }

  function handleTouchMove(e) {
    if (!enabled || !isSwiping.current) return;

    if (touchStartX.current !== null && touchStartY.current !== null) {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const dx = Math.abs(currentX - touchStartX.current);
      const dy = Math.abs(currentY - touchStartY.current);

      if (dx > 15 || dy > 15) {
        isHorizontalSwipe.current = dx > dy;
      }
    }
  }

  function handleTouchEnd(e) {
    const wasHorizontalSwipe = isHorizontalSwipe.current;
    isSwiping.current = false;
    isHorizontalSwipe.current = false;

    if (
      !enabled ||
      touchStartX.current === null ||
      touchStartY.current === null ||
      touchStartTime.current === null
    )
      return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    const deltaTime = Date.now() - touchStartTime.current;

    const velocity = Math.abs(dx) / deltaTime;
    const isHorizontal = Math.abs(dx) > Math.abs(dy);

    // Użyj aktywnych progów
    if (
      Math.abs(dx) > activeThreshold &&
      velocity > activeVelocityThreshold &&
      isHorizontal &&
      wasHorizontalSwipe
    ) {
      if (dx < 0 && onSwipeLeft) onSwipeLeft();
      if (dx > 0 && onSwipeRight) onSwipeRight();
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchStartTime.current = null;
  }

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
}
