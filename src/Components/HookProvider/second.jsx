import React, { useReducer, useState } from "react";

function reducer(todosState, action) {
  switch (action.value) {
    case "add-todo":
      return {
        todos: [...todosState.todos, { text: action.text, open: true }],
      };
    default:
      return todosState;
  }
}

const TodoList = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ value: "add-todo", text: todoText });
        setTodoText("");
      }}
    >
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        placeholder="put your todo title "
      />
      <button className="btn-primary" type="submit">
        Add todo
      </button>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </form>
  );
};

export default TodoList;
