import {POKEMON_API} from './API';
import { fetchData } from "./getData";

import paintPokemon from '../pages/paintPokemon';
import { pokemonContainer } from '../components/nodos';
import pokemons from './pokemons';

const searchData = async (busqueda) => {
    try {
        pokemonContainer.innerHTML = " ";        
        if (!busqueda == " ") {
            const data =  await fetchData(`${POKEMON_API}/${busqueda.toLowerCase()}`)
            paintPokemon(data);
        }
        else {
            pokemons();
        }

    } catch (error) {
        console.log(error);
    }
}

export default searchData;