import { useState, useCallback } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  const inc = useCallback(() => setCount((x) => x + 1), []);
  return {count, inc}
}
