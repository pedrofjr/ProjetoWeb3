import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ListPartido() {
  const [partidos, setPartidos] = useState([]);

  const navigate = useNavigate();

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
      <div className="buttons">
        <button onClick={() => navigate('/')}>Voltar</button>
      </div>
    </div>
  );
}
export default ListPartido;
