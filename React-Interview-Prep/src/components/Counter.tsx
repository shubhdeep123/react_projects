import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count == 0}
      >
        Decrement
      </button>
    </div>
  );
}
