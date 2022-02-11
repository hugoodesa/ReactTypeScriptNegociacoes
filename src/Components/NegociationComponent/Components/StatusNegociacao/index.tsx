import React from "react";
import { StatusNegociacao } from "../../interfaces/BankInterfaces";

interface Props {
  tipoNegociacoes: StatusNegociacao[];
  setStatus: (value: React.SetStateAction<StatusNegociacao>) => void;
}

export const TipoNegociacaoComponent: React.FC<Props> = ({
  tipoNegociacoes,
  setStatus,
}) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text">Tipo de negociação</label>
      <select
        defaultValue={tipoNegociacoes[0]}
        className="form-select"
        id="inputGroupSelect01"
      >
        {tipoNegociacoes.map((tipoNegociacao, idx: number) => {
          return (
            <option key={idx} onSelect={() => setStatus(tipoNegociacao)}>
              {tipoNegociacao}
            </option>
          );
        })}
      </select>
    </div>
  );
};
