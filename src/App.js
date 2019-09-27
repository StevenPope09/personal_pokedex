import React, { useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import Routes from './components/Routes'
// import Pokedex from './components/pages/Pokedex';
// import Collection from './components/pages/Collection';
// import Home from './components/pages/Home';
// import PokemonDetail from './components/pages/PokemonDetail';
//import { HashRouter } from 'react-router-dom'
//import { Container } from 'react-bootstrap';

function App() {

  useEffect(() => {
    if (localStorage.getItem("collection") == null) {
      localStorage.setItem("collection", JSON.stringify([]));
    }
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Header pgTitle="Classic Pokedex" />
        <div>
          <Routes />
        </div>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
