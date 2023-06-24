import React, { useState } from 'react';
import axios from 'axios'; // Ou outro cliente HTTP que preferir.

function CreateCandidato() {
  const [candidato, setCandidato] = useState({
    idCandidato: '',
    nome: '',
    idade: '',
    idPartido: '',
    idEleicao: ''
  });

  const handleChange = (event) => {
    setCandidato({ ...candidato, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/candidatos', candidato); // Substitua pelo caminho correto da sua API.
      // Tratamento após sucesso na criação.
    } catch (error) {
      // Tratamento de erro.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Aqui você adiciona os campos do formulário para cada atributo do candidato */}
      {/* Por exemplo, para o nome: */}
      <label>
        Nome:
        <input name="nome" type="text" value={candidato.nome} onChange={handleChange} />
      </label>
      {/* Adicione os demais campos aqui... */}
      <button type="submit">Criar Candidato</button>
    </form>
  );
}
export default CreateCandidato;
