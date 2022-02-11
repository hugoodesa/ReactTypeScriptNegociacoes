import React from "react";

/* id?: number;
data?: Date;
valor: number;
quantidade: number;
titulo: string;
status?: StatusNegociacao;
total?: number; */

export const TableComponent: React.FC = () => {
  return (
    <table className="table table-dark table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">valor</th>
          <th scope="col">quantidade</th>
          <th scope="col">status</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};
