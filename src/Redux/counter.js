import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./counterActions";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1> Counter Value </h1>
      <h1>
        <span>{counter}</span>
      </h1>
      <div>
        <button onClick={() => dispatch(Increment())}>Increment</button>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
