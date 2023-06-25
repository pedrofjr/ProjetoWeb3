import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateCandidato() {
  const [candidato, setCandidato] = useState({
    nome: '',
    idade: '',
    idPartido: '',
    idEleicao: ''
  });

  const [partidos, setPartidos] = useState([]);
  const [eleicoes, setEleicoes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPartidos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/partidos');
        setPartidos(response.data);
      } catch (error) {
        console.log(error)
      }
    };
  
    const fetchEleicoes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/eleicoes');
        setEleicoes(response.data);
      } catch (error) {
        console.log(error)
      }
    };
  
    fetchPartidos();
    fetchEleicoes();
  }, []);

  const handleChange = (event) => {
    setCandidato({ ...candidato, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/candidatos', candidato);
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input name="nome" type="text" value={candidato.nome} onChange={handleChange} />
        <br/>
        Idade:
        <input name="idade" type="number" value={candidato.idade} onChange={handleChange} />
        <br/>
        Partido:
        <select name="idPartido" value={candidato.idPartido} onChange={handleChange}>
          <option value="">Selecione um partido...</option>
          {partidos.map((partido) => (
            <option key={partido.id} value={partido.id}>{partido.nome}</option>
          ))}
        </select>
        <br/>
        Eleição:
        <select name="idEleicao" value={candidato.idEleicao} onChange={handleChange}>
        <option value="">Selecione uma eleição...</option>
          {eleicoes.map((eleicao) => (
            <option key={eleicao.id} value={eleicao.id}>{eleicao.localidade} - {eleicao.ano}</option>
          ))}
        </select>
      </label>
      <br/>
      <button type="submit">Criar Candidato</button>
    </form>
  );
}

export default CreateCandidato;
