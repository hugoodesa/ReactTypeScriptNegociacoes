import React, { useState, useRef, MouseEvent } from "react";

interface Pearson {
  name: String;
  lastName?: string;
}

interface Props {
  text: string;
  numeric: number;
  func: (a: number, b: number) => number;
  pearson: Pearson;
}

const InputText: React.FC<Props> = ({ text, numeric, func, pearson }) => {
  const [first, setfirst] = useState<String | null | undefined>("stapassoli");
  const input = useRef<HTMLInputElement | null>(null);

  const handleButton = (e: MouseEvent | undefined): void => {
    e?.preventDefault();
    input.current?.focus();
  };

  return (
    <>
      <h1>Using TypeScript</h1>
      <p>Text : {text}</p>
      <p>numeric : {numeric}</p>
      <p>FirstName: {pearson.name}</p>
      <p>func : {func(numeric, numeric)}</p>
      <p>Screen lastName : {first?.toUpperCase()}</p>

      <section>
        <input className="input-group-text" type="text" ref={input} />
        <br />
        <button onClick={(e) => handleButton(e)} className="btn btn-primary">
          Focus on input
        </button>
      </section>
    </>
  );
};

export default InputText;
