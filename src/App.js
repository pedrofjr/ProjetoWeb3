import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './elements/HomePage';
import ListaEleicoes from './elements/Eleicao/Lista';
import FormularioEleicoes from './elements/Eleicao/Formulario';
import ListaPartidos from './elements/Partido/Lista';
import FormularioPartidos from './elements/Partido/Formulario';
import ListaCandidatos from './elements/Candidato/Lista';
import FormularioCandidatos from './elements/Candidato/Formulario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eleicao/lista" element={<ListaEleicoes />} />
        <Route path="/eleicao/formulario" element={<FormularioEleicoes />} />
        <Route path="/partido/lista" element={<ListaPartidos />} />
        <Route path="/partido/formulario" element={<FormularioPartidos />} />
        <Route path="/candidato/lista" element={<ListaCandidatos />} />
        <Route path="/candidato/formulario" element={<FormularioCandidatos />} />
      </Routes>
    </Router>
  );
}

export default App;
