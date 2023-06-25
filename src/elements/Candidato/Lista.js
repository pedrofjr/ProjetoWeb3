import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListCandidato() {
  const [candidatos, setCandidatos] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [eleicoes, setEleicoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candidatosResponse, partidosResponse, eleicoesResponse] = await Promise.all([
          axios.get('http://localhost:3001/candidatos'),
          axios.get('http://localhost:3001/partidos'),
          axios.get('http://localhost:3001/eleicoes')
        ]);
        setCandidatos(candidatosResponse.data);
        setPartidos(partidosResponse.data);
        setEleicoes(eleicoesResponse.data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Partido</th>
            <th>Eleição</th>
          </tr>
        </thead>
        <tbody>
          {candidatos.map((candidato) => {
            const partido = partidos.find(partido => partido.id == candidato.idPartido);
            const eleicao = eleicoes.find(eleicao => eleicao.id == candidato.idEleicao);
            return (
              <tr key={candidato.id}>
                <td>{candidato.nome}</td>
                <td>{candidato.idade}</td>
                <td>{partido && partido.nome}</td>
                <td>{eleicao && eleicao.localidade + ' - ' + eleicao.ano}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListCandidato;
