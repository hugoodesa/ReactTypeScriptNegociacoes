import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.value) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const ProviderReview = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Use Reducer</h1>
      <h3>Initial Value : {state}</h3>

      <button
        className="btn btn-primary"
        onClick={() => dispatch({ value: "increment" })}
      >
        Incremente
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

export default ProviderReview;
