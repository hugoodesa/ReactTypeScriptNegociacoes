import React, { useReducer, useState, useRef } from "react";
import { Button, Stack, Divider } from "@mui/material";

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

type State = Array<Todo>;

type Action =
  | { type: "add"; title: string; id: number }
  | { type: "remove"; id: number };

const reducer = (state: State, action: Action): State => {
  const { id, type } = action;
  let newState: Todo[] = [...state];

  switch (type) {
    case "add":
      const { title } = action;
      newState = [...state, { id, title, complete: false }];
      return newState;
    case "remove":
      newState = [...state].filter((todo) => todo.id !== id);
      return newState;
    default:
      return state;
  }
};

const UseReducerTypeScriptV2: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const [todoTitle, setTodoTitle] = useState<string>("");
  const inputTitleElement = useRef<HTMLInputElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    inputTitleElement.current?.focus();
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const id = Math.floor(Math.random() * 10 - 1);
          dispatch({ id, title: todoTitle, type: "add" });
          setTodoTitle("");
        }}
      >
        <h4>Todo List using useReducer</h4>
        <input
          value={todoTitle}
          onChange={handleInput}
          ref={inputTitleElement}
        />
        <button onClick={(e) => handleButton(e)} className="btn btn-primary">
          Add todo
        </button>
      </form>

      {state.map((todo, idx) => {
        return (
          <div key={idx}>
            <p>{`${todo.title} | completed : ${todo.complete} `}</p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                return dispatch({ id: todo.id, type: "remove" });
              }}
            >
              Remove Todo
            </button>
          </div>
        );
      })}
      <Button>Abc</Button>
    </div>
  );
};

export default UseReducerTypeScriptV2;

<Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
></Stack>;
