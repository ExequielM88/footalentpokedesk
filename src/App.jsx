import { Route,Routes } from 'react-router-dom';
import Pokedex from './pages/Pokedex.jsx';
import PokeInfo from './pages/PokeInfo';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Pokedex/>} />
        <Route path='/pokedex/:name' element={<PokeInfo/>} />
      </Routes>
    </div>
  )
}

export default App
