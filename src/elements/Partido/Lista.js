import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ou outro cliente HTTP que preferir.

function ListPartido() {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/partidos'); // Substitua pelo caminho correto da sua API.
        setPartidos(response.data);
      } catch (error) {
        // Tratamento de erro.
      }
    };
    fetchData();
  }, []); // O array vazio indica que o useEffect deve ser executado apenas uma vez, após a primeira renderização.

  return (
    <div>
      {/* Aqui você irá listar seus partidos */}
      {/* Por exemplo: */}
      {partidos.map((partido) => (
        <div key={partido.idPartido}>
          <h3>Nome: {partido.nome}</h3>
          <p>Sigla: {partido.sigla}</p>
          <p>Ano de Fundação: {partido.anoFundacao}</p>
          {/* Mostre os demais campos aqui... */}
        </div>
      ))}
    </div>
  );
}
export default ListPartido;
