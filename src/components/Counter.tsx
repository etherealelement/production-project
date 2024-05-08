import React from "react";
import "./styles.scss"
export const Counter = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount((e) => e + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((e) => e - 1)}>-</button>
    </div>
  );
};
