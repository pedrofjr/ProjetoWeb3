import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListPartido() {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/partidos');
        setPartidos(response.data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, []); 

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sigla</th>
            <th>Ano de Fundação</th>
          </tr>
        </thead>
        <tbody>
          {partidos.map((partido) => (
            <tr key={partido.id}>
              <td>{partido.nome}</td>
              <td>{partido.sigla}</td>
              <td>{partido.anoFundacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListPartido;
