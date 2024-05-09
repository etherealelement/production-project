import React from "react";
import styles from "./styles.module.scss";
export const Counter = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <button className={styles.button} onClick={() => setCount((e) => e + 1)}>+</button>
      <span>{count}</span>
      <button className={styles.button} onClick={() => setCount((e) => e - 1)}>-</button>
    </div>
  );
};
