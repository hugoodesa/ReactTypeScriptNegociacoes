import react, { useState, useRef } from "react";

interface Adress {
  street: string;
  city: string;
}

interface Pearson {
  firstName: string;
  lasName: string;
  fn: (a: number, b: number) => number;
  adress: {
    street: string;
    city: string;
  };
}

interface Props {
  text: string;
  dude: Pearson;
}

interface Pc {
  processador: string;
  giros: number;
}

const InputElement: React.FC<Props> = ({ text, dude }) => {
  const [count, setCount] = useState<number | null | undefined | string>(0);
  const [message, setMessage] = useState<Pc>({ processador: "i7", giros: 3.8 });

  const refElement = useRef<HTMLInputElement>(null);
  const divElement = useRef<HTMLDivElement>(null);

  /* setCount(null); */

  const handleButton = (): void => {
    refElement.current?.focus();
  };

  return (
    <>
      <h3>{text}</h3>
      <h4>Information:</h4>
      <section>
        <h5>Presentation:</h5>
        <p>FirstName:{dude.firstName}</p>
        <p>LastName:{dude.lasName}</p>
      </section>
      <section>
        <h5>Adress:</h5>
        <p>Adress:{dude.adress.street}</p>
        <p>Adress:{dude.adress.city}</p>
      </section>
      <section>
        <h5>I gonna show you a nice thing !</h5>
        <p>{dude.fn(5, 6)}</p>
      </section>

      <div ref={divElement}>
        <input placeholder="my input" ref={refElement} type="text" />
        <button onClick={() => handleButton()}>Focus on input</button>
      </div>
    </>
  );
};

export default InputElement;
