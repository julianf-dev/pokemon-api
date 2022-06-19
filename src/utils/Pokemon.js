import { POKEMON_API } from './API';
import { fetchData } from "./getData";

import { PokemonView } from '../pages/PokemonView';

import {pokemonContainer } from '../components/Nodos';
import { Buttons } from '../pages/Buttons'

let currentPokemon;

const Pokemon = async (id) => {
    try {
        const idPokemon = Math.round(Math.random() * (1, 200));
        if (id) {
            currentPokemon = await fetchData(`${POKEMON_API}/${id}`);
        }
        else{
            currentPokemon = await fetchData(`${POKEMON_API}/${idPokemon}`);
        }
        pokemonContainer.innerHTML = " ";
        PokemonView(currentPokemon);
        Buttons(currentPokemon)

    } catch (error) {
        console.log(error);
    }
}

export { Pokemon }