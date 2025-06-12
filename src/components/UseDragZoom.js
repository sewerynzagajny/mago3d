import { useRef, useState } from "react";

export default function UseDragZoom({ zoomed, scale, mainViewRef }) {
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragOrigin = useRef({ x: 0, y: 0 });

  function clamp(val, min, max) {
    return Math.max(min, Math.min(val, max));
  }

  const handleStart = (x, y) => {
    if (!zoomed) return;
    setDragging(true);
    dragStart.current = { x, y };
    dragOrigin.current = { x: drag.x, y: drag.y };
  };

  const handleMove = (x, y) => {
    if (!zoomed || !dragging) return;
    const container = mainViewRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;
    const imgWidth = containerWidth * scale;
    const imgHeight = containerHeight * scale;
    const maxX = (imgWidth - containerWidth) / 2;
    const maxY = (imgHeight - containerHeight) / 2;

    let nextX = dragOrigin.current.x + (x - dragStart.current.x);
    let nextY = dragOrigin.current.y + (y - dragStart.current.y);

    nextX = clamp(nextX, -maxX, maxX);
    nextY = clamp(nextY, -maxY, maxY);

    setDrag({ x: nextX, y: nextY });
  };

  const handleEnd = () => setDragging(false);

  return {
    drag,
    dragging,
    handleStart,
    handleMove,
    handleEnd,
    setDrag,
  };
}
