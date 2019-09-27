import React from 'react';
import { Route } from "react-router-dom";
import Home from '../components/pages/Home'
import Pokedex from '../components/pages/Pokedex';
import Collection from '../components/pages/Collection';
import PokemonDetail from '../components/pages/PokemonDetail';


function Routes(){
    
    return (
        <div>
        <Route  exact path="/" component={Home} />
        <Route   path="/#pokedex"  component={Pokedex} />
        <Route   path="/#collection" component={Collection} />
        <Route   path="/#pokemon/:idOrName"  component={PokemonDetail} />
        </div>
    )
}
export default Routes;

