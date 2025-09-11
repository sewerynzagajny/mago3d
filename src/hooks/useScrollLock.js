import { useEffect } from "react";

export default function useScrollLock(locked, ref) {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    if (locked) {
      el.classList.add("scroll-locked");
    } else {
      el.classList.remove("scroll-locked");
    }
    return () => el.classList.remove("scroll-locked");
  }, [locked, ref]);
}
