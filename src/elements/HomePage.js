import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bem-vindo à nossa plataforma de eleições</h1>
      <p>Aqui você pode gerenciar eleições, partidos e candidatos.</p>
      <nav>
        <ul>
          <li className="titleStyle">Eleições</li>
          <li><Link to="/eleicao/formulario" className="linkStyle">Criar Eleição</Link></li>
          <li><Link to="/eleicao/lista" className="linkStyle">Listar Eleições</Link></li>
          <br></br>
          <li className="titleStyle">Partidas</li>
          <li><Link to="/partido/formulario" className="linkStyle">Criar Partido</Link></li>
          <li><Link to="/partido/lista" className="linkStyle">Listar Partidos</Link></li>
          <br></br>
          <li className="titleStyle">Candidatos</li>
          <li><Link to="/candidato/formulario" className="linkStyle">Criar Candidato</Link></li>
          <li><Link to="/candidato/lista" className="linkStyle">Listar Candidatos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
