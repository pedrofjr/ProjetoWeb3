import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListarEleicoes() {
  const [eleicoes, setEleicoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/eleicoes');
        setEleicoes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Tipo</th>
            <th>Localidade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {eleicoes.map((eleicao) => (
            <tr key={eleicao.id}>
              <td>{eleicao.ano}</td>
              <td>{eleicao.tipo}</td>
              <td>{eleicao.localidade}</td>
              <td>{eleicao.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListarEleicoes;
