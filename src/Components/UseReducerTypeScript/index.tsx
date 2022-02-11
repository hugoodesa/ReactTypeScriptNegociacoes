import React, { useReducer, useState } from "react";

interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

type Action =
  | { type: "add"; text: string; id: number }
  | { type: "remove"; idx: number };

type State = Todo[];

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false, id: action.id }];
    case "remove":
      const newState = [...state].filter((todo) => todo.id !== action.idx);
      console.log(action.idx);
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

const UseReducerTypeScript: React.FC = () => {
  const [textTodo, setTextTodo] = useState<string>("");
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
          placeholder="type your todo"
          style={{ margin: "10px", padding: "5", borderRadius: "5px" }}
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch({
              type: "add",
              text: textTodo,
              id: Math.round(Math.random() * (100 - 1)),
            })
          }
        >
          Add todo
        </button>
      </form>

      {todos.map((todo, idx: number) => {
        return (
          <div key={idx}>
            <p>{` Id : ${todo.id} | Text : ${todo.text} | Complete : ${todo.complete}`}</p>
            <button
              className="btn btn-secondary"
              onClick={() => dispatch({ type: "remove", idx: todo.id })}
            >
              Remover
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseReducerTypeScript;
