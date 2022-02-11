import { TextField } from "@mui/material";
import React from "react";

interface Props {
  type: "number" | "text";
  placeholder: string;
  setter: (value: React.SetStateAction<any>) => void;
  isCampoValido: boolean;
  children: JSX.Element;
}

export const InputComponent: React.FC<Props> = ({
  type,
  setter,
  placeholder,
  isCampoValido,
  children,
}) => {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const type = e.target.type;

    if (type === "number") {
      setter(Number(value));
      return;
    }

    if (type === "text") setter(value);
  };

  return (
    <>
      <input
        className="input-group mb-3"
        type={type}
        placeholder={placeholder}
        style={{
          borderRadius: "5px",
          padding: "7px",
          height: "5%",
          fontSize: "15px",
        }}
        onChange={(e) => handler(e)}
      />
      {isCampoValido && (
        <div style={{ fontSize: "12px", color: "tomato" }}>{children}</div>
      )}
    </>
  );
};
