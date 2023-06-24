import React, { useState } from 'react';
import axios from 'axios'; // Ou outro cliente HTTP que preferir.

function CreatePartido() {
  const [partido, setPartido] = useState({
    idPartido: '',
    nome: '',
    sigla: '',
    anoFundacao: ''
  });

  const handleChange = (event) => {
    setPartido({ ...partido, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/partidos', partido); // Substitua pelo caminho correto da sua API.
      // Tratamento após sucesso na criação.
    } catch (error) {
      // Tratamento de erro.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Aqui você adiciona os campos do formulário para cada atributo do partido */}
      {/* Por exemplo, para o nome: */}
      <label>
        Nome:
        <input name="nome" type="text" value={partido.nome} onChange={handleChange} />
      </label>
      {/* Adicione os demais campos aqui... */}
      <button type="submit">Criar Partido</button>
    </form>
  );
}
export default CreatePartido;
