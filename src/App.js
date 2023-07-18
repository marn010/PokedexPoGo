import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { Routes, Route, } from "react-router-dom";

import Pokedex from './components/Pokedex/main';
import PvP from './components/PvP/main';
import Pokemon from "./components/Pokedex/Pokemon/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Pokedex" element={<Pokedex/>} />
        <Route path="/PvP" element={<PvP/>} />
        <Route path="/Pokemon" element={<Pokemon/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
