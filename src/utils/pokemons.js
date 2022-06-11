import {POKEMON_API} from './API';

import { fetchData } from "./getData";

import paintPokemon from '../components/paintPokemon';

async function pokemons(){
    try {
        const data = await fetchData(`${POKEMON_API}/?limit=20`);
        const pokemons = data.results;
        pokemons.map(pokemon => {
                urlPokemons(pokemon.url);
        })
    } catch (error) {
        console.log(error);
    }
}

async function urlPokemons(pokemons) {
    try {
        const data = await fetchData(pokemons)
        paintPokemon(data);
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

export default pokemons