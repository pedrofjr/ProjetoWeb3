import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ou outro cliente HTTP que preferir.

function ListCandidato() {
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/candidatos'); // Substitua pelo caminho correto da sua API.
        setCandidatos(response.data);
      } catch (error) {
        // Tratamento de erro.
      }
    };
    fetchData();
  }, []); // O array vazio indica que o useEffect deve ser executado apenas uma vez, após a primeira renderização.

return (
  <div>
    {/* Aqui você irá listar seus candidatos */}
    {/* Por exemplo: */}
    {candidatos.map((candidato) => (
      <div key={candidato.idCandidato}>
        <h3>Nome: {candidato.nome}</h3>
        <p>Idade: {candidato.idade}</p>
        <p>ID do Partido: {candidato.idPartido}</p>
        <p>ID da Eleição: {candidato.idEleicao}</p>
        {/* Mostre os demais campos aqui... */}
      </div>
    ))}
  </div>
);
}
export default ListCandidato;
