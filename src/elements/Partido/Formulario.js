import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePartido() {
  const [partido, setPartido] = useState({
    nome: '',
    sigla: '',
    anoFundacao: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setPartido({ ...partido, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/partidos', partido);
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  };  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input name="nome" type="text" value={partido.nome} onChange={handleChange} />
        <br/>
        Sigla:
        <input name="sigla" type="text" value={partido.sigla} onChange={handleChange} />
        <br/>
        Ano de Fundação:
        <input name="anoFundacao" type="number" value={partido.anoFundacao} onChange={handleChange} />
      </label>
      <div className="buttons">
        <button type="submit">Criar Partido</button>
        <button onClick={() => navigate('/')}>Cancelar</button>
      </div>
    </form>
  );
}
export default CreatePartido;
