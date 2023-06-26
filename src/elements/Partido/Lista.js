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
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {partidos.map((partido) => (
          <li key={partido.id} className="list-item">
            <div>{`Nome: ${partido.nome}`}</div>
            <div>{`Sigla: ${partido.sigla}`}</div>
            <div>{`Ano de Fundação: ${partido.anoFundacao}`}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListPartido;
