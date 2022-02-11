import React, { useState, useReducer, useContext } from "react";
import { NegociacaoContext } from "./validation/Validacao";
import {
  Action,
  NegociacaoModel,
  NegociacaoValida,
  Negociacoes,
  StatusNegociacao,
} from "./interfaces/BankInterfaces";
import { TipoNegociacaoComponent } from "./Components/StatusNegociacao";
import { InputComponent } from "./Components/Input/index";
import { TableComponent } from "./Components/TableComponents/index";

const reducer = (state: Negociacoes, action: Action): Negociacoes => {
  let newState: Negociacoes;

  switch (action.type) {
    case "add":
      newState = [...state, action.negociacao];
      console.log(newState);
      return newState;
    case "remove":
      newState = state.filter((negociaco) => negociaco.id !== action.idx);
      return newState;
    default:
      return state;
  }
};

const NegociationComponent: React.FC = () => {
  const { isNegociacaoValida } = useContext(NegociacaoContext);

  const [valor, setValor] = useState<number>(0);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [titulo, setTitulo] = useState<string>("");
  const [status, setStatus] = useState<StatusNegociacao>("aberta");
  const [negociacaoValida, setNegociacaoValida] = useState<NegociacaoValida>();

  const [negociacoes, dispatch] = useReducer(reducer, []);

  return (
    <>
      <div style={{ width: "50%" }}>
        <form
          onSubmit={(e) => {
            console.log("enviado");
            e.preventDefault();

            const newNegociacao: NegociacaoModel = {
              valor,
              quantidade,
              titulo,
              status,
              data: new Date(),
              total: valor * quantidade,
            };

            try {
              isNegociacaoValida(newNegociacao, setNegociacaoValida);
            } catch (error) {
              console.log(error);
              return;
            }

            dispatch({ type: "add", negociacao: newNegociacao });
          }}
        >
          <InputComponent
            type={"number"}
            setter={setValor}
            placeholder={"R$ valor transacao"}
            isCampoValido={negociacaoValida?.isValorValido === false}
          >
            <p>Valor inválido</p>
          </InputComponent>

          <InputComponent
            type={"number"}
            setter={setQuantidade}
            placeholder={"quantidade"}
            isCampoValido={negociacaoValida?.isQuantidadeValida === false}
          >
            <p>Quantidade inválida</p>
          </InputComponent>

          <InputComponent
            type={"text"}
            setter={setTitulo}
            placeholder={"titulo"}
            isCampoValido={negociacaoValida?.isTituloPreenchido === false}
          >
            <p>Titulo inválido</p>
          </InputComponent>

          <TipoNegociacaoComponent
            setStatus={setStatus}
            tipoNegociacoes={["aberta", "fechada", "pendente"]}
          />

          <button className="btn btn-primary">Adicionar negociacao</button>
        </form>
      </div>

      <section about="transactions" style={{ width: "80%", marginTop: "10px" }}>
        <TableComponent />
      </section>
    </>
  );
};

export default NegociationComponent;
