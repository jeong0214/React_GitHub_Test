import { useState } from "react";

function Count() {
  let [count, setCount] = useState(1);
  return (
    <div className="countCon">
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
        className="min"
      >
        -
      </button>
      <span>{count < 1 ? setCount(1) : count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className="plus"
      >
        +
      </button>
    </div>
  );
}
export default Count;
