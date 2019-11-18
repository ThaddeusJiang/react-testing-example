import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
