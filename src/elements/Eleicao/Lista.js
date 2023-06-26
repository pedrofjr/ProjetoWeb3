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
    <div className="container">
      <div className="row header">
        <div className="cell">Ano</div>
        <div className="cell">Tipo</div>
        <div className="cell">Localidade</div>
        <div className="cell">Status</div>
      </div>
      {eleicoes.map((eleicao) => (
        <div key={eleicao.id} className="row">
          <div className="cell">{eleicao.ano}</div>
          <div className="cell">{eleicao.tipo}</div>
          <div className="cell">{eleicao.localidade}</div>
          <div className="cell">{eleicao.status}</div>
        </div>
      ))}
    </div>
  );
}
export default ListarEleicoes;
