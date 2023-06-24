import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ou outro cliente HTTP que preferir.

function ListarEleicoes() {
  const [eleicoes, setEleicoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/eleicoes'); // Substitua pelo caminho correto da sua API.
        setEleicoes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // O array vazio indica que o useEffect deve ser executado apenas uma vez, após a primeira renderização.

  return (
    <div>
      {/* Aqui você irá listar suas eleições */}
      {/* Por exemplo: */}
      {eleicoes.map((eleicao) => (
        <div key={eleicao.idEleicao}>
          <h3>Ano: {eleicao.ano}</h3>
          <p>Tipo: {eleicao.tipo}</p>
          <p>Status: {eleicao.status}</p>
          {/* Mostre os demais campos aqui... */}
        </div>
      ))}
    </div>
  );
}
export default ListarEleicoes;
