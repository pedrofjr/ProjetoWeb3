import React, { useState } from 'react';
import axios from 'axios'; // Ou outro cliente HTTP que preferir.

function CriarEleicao() {
  const [eleicao, setEleicao] = useState({
    idEleicao: '',
    ano: '',
    tipo: '',
    status: ''
  });

  const handleChange = (event) => {
    setEleicao({ ...eleicao, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/eleicoes', eleicao); // Substitua pelo caminho correto da sua API.
      // Tratamento após sucesso na criação.
    } catch (error) {
      // Tratamento de erro.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Aqui você adiciona os campos do formulário para cada atributo da eleição */}
      {/* Por exemplo, para o ano: */}
      <label>
        Ano:
        <input name="ano" type="number" value={eleicao.ano} onChange={handleChange} />
      </label>
      {/* Adicione os demais campos aqui... */}
      <button type="submit">Criar Eleição</button>
    </form>
  );
}
export default CriarEleicao;
