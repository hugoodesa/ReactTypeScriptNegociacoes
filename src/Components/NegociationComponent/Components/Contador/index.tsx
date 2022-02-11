import React, { useState } from "react";

interface Props {
  children: (
    counter: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>
  ) => void;
}

export const Contador: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return <>{children(count, setCount)}</>;
};
