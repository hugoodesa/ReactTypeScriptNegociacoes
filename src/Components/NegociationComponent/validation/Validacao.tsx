import React, { createContext } from "react";
import {
  NegociacaoModel,
  NegociacaoValida,
} from "../interfaces/BankInterfaces";

const isNegociacaoValida = (
  negociacao: NegociacaoModel,
  setter: React.Dispatch<React.SetStateAction<NegociacaoValida | undefined>>
): void => {
  const negociacaoValida: NegociacaoValida = {};

  const { quantidade, titulo, valor } = negociacao;

  if (quantidade < 0 || quantidade === 0) {
    negociacaoValida.isQuantidadeValida = false;
  }

  if (titulo.trim().length === 0) {
    negociacaoValida.isTituloPreenchido = false;
  }

  if (titulo.trim().length < 10 && titulo.trim().length > 0) {
    negociacaoValida.isTituloValido = false;
  }

  if (valor <= 0) {
    negociacaoValida.isValorValido = false;
  }

  setter(negociacaoValida);

  if (Object.keys(negociacaoValida).length > 0)
    throw new Error("Negociacao inválida , faltando campos");
};

export const NegociacaoContext = createContext({ isNegociacaoValida });
