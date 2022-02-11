import React, { useRef } from "react";

export interface People {
  name: string;
  lastName: string;
}

interface Props {
  sayHellowTo?: String;
  numeric?: number;
  func: (a: number, b: number) => number;
  pearson: People;
}

const UseTypeScriptReview: React.FC<Props> = ({ pearson, func }) => {
  const { name, lastName } = pearson;

  const element = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    element.current?.focus();
    e.preventDefault();
    console.log(element);
  };

  return (
    <>
      <h1>Welcome to typeScript {`${name} ${lastName}`}</h1>
      <h2>Execute func {func(1, 3)}</h2>
      <form>
        <input
          style={{ margin: 10, borderRadius: "5px", padding: "5px" }}
          type={"text"}
          placeholder="insert your text"
          ref={element}
        />
        <button onClick={(e) => handleChange(e)} className="btn btn-primary">
          Focus on input
        </button>
      </form>
    </>
  );
};

export default UseTypeScriptReview;
