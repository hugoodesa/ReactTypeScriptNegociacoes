import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.value) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const HookProvider = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>Counter : {count}</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ value: "increment" })}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ value: "decrement" })}
      >
        Decrement
      </button>
    </>
  );
};

export default HookProvider;
