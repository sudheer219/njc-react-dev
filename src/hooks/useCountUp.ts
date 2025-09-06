// ✅ Hook must be defined before using it
import { useEffect, useState } from "react";

export default function useCountUp(target: number | null, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === null) return;
    let start = 0;
    const stepTime = Math.max(1, Math.floor(duration / target));
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}