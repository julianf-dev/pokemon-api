import {POKEMON_API} from './API';
import { fetchData } from "./getData";

import { PokemonView } from '../pages/PokemonView';
import { pokemonContainer } from '../components/Nodos';
import { Pokemons } from './Pokemons';

const DataSearch = async (busqueda) => {
    try {
        pokemonContainer.innerHTML = " ";        
        if (!busqueda == " ") {
            const data =  await fetchData(`${POKEMON_API}/${busqueda.toLowerCase()}`)
            PokemonView(data);
        }
        else {
            Pokemons();
        }

    } catch (error) {
        console.log(error);
    }
}

export  { DataSearch };