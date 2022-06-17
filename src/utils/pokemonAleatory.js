import {POKEMON_API} from './API';
import { fetchData } from "./getData";

import paintPokemon from '../pages/paintPokemon';
import { paintButtons } from '../pages/paintButtons';

import {pokemonContainer} from '../components/nodos'


let currentPokemon;

export const pokemonAleatory = async (id) => {
    try {
        const idPokemon = Math.round(Math.random() * (1, 200));
        if (id) {
            currentPokemon = await fetchData(`${POKEMON_API}/${id}`);
        }
        else{
            currentPokemon = await fetchData(`${POKEMON_API}/${idPokemon}`);
            console.log(currentPokemon.id);
        }
        pokemonContainer.innerHTML = " ";
        paintPokemon(currentPokemon);
        paintButtons(currentPokemon);

    } catch (error) {
        console.log(error);
    }
}
