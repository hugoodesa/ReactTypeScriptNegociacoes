export interface NegociacaoModel {
  id?: number;
  data?: Date;
  valor: number;
  quantidade: number;
  titulo: string;
  status?: StatusNegociacao;
  total?: number;
}

export interface NegociacaoValida {
  isValorValido?: boolean;
  isQuantidadeValida?: boolean;
  isTituloValido?: boolean;
  isTituloPreenchido?: boolean;
}

export type StatusNegociacao = "aberta" | "fechada" | "pendente";

export type Negociacoes = NegociacaoModel[];

export type Action =
  | { type: "add"; negociacao: NegociacaoModel }
  | { type: "remove"; idx: number };
