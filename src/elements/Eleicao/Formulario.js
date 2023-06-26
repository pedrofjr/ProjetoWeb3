import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CriarEleicao() {
  const [eleicao, setEleicao] = useState({
    ano: '',
    tipo: '',
    localidade: '',
    status: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setEleicao({ ...eleicao, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/eleicoes', eleicao);
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ano:
        <input name="ano" type="number" value={eleicao.ano} onChange={handleChange} required/>
        <br/>
        Tipo:
        <select name="tipo" onChange={handleChange} required>
          <option value="">Selecione um tipo...</option>
          <option value="Municipal">Municipal</option>
          <option value="Estadual">Estadual</option>
          <option value="Presidencial">Presidencial</option>
        </select>
        <br/>
        Localidade:
        <input name="localidade" type="text" value={eleicao.localidade} onChange={handleChange} required/>
        <br/>
        Status:
        <select name="status" onChange={handleChange} required>
          <option value="">Selecione um status...</option>
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Finalizada">Finalizada</option>
        </select>
      </label>
      <div className="buttons">
        <button type="submit">Criar Eleição</button>
        <button onClick={() => navigate('/')}>Cancelar</button>
      </div>
    </form>
  );
}
export default CriarEleicao;
