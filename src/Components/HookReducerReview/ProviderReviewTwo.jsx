import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.method) {
    case "submit":
      const { newTodo } = action;
      return [...state, newTodo];
    case "edit":
      const { editedTodo, idx } = action;
      state[idx] = editedTodo;
      return [...state];
    default:
      return state;
  }
};

const ProviderReviewTwo = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <h1>Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            newTodo: { title: todo, finished: false },
            method: "submit",
          });
        }}
      >
        <input
          className="input-group mb-3"
          onChange={(e) => setTodo(e.target.value)}
          type={"text"}
          placeholder="insert your todo"
        />
        <button className="btn btn-primary">Add todo</button>
      </form>

      <ul>
        {state.map((todoEl, idx) => {
          return (
            <>
              <li key={idx}>
                Title : {todoEl.title} | Finished :{" "}
                {todoEl.finished ? "True" : "False"}
              </li>
              <button
                onClick={() =>
                  dispatch({
                    editedTodo: { ...todoEl, finished: !todoEl.finished },
                    idx,
                    method: "edit",
                  })
                }
                className="btn btn-secondary"
              >
                Toggle
              </button>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default ProviderReviewTwo;
