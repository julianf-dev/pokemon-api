import {POKEMON_API} from './API';
import { fetchData } from "./getData";

import paintPokemon from '../components/paintPokemon'



export const pokemonAleatory = async () => {
    try {
        const idPokemon = Math.round(Math.random() * (1, 100));
        const data = await fetchData(`${POKEMON_API}/${idPokemon}`);
        paintPokemon(data);

    } catch (error) {
        console.log(error);
    }
}
