import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Relogio from './components/relogio';
import Letreiro from './components/letreiro';
import './App.css'; // Importando o CSS

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Página Inicial</h1>
        <nav>
          <Link to="/relogio">
            <button>Atividade 1: Relógio</button>
          </Link>
          <Link to="/letreiro">
            <button>Atividade 2: Letreiro</button>
          </Link>
        </nav>

        <Routes>
          <Route
            path="/relogio"
            element={
              <div className="component">
                <Relogio />
              </div>
            }
          />
          <Route
            path="/letreiro"
            element={
              <div className="component">
                <Letreiro />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;