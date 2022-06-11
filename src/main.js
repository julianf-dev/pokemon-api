import {search, generatePokemon, pokemonContainer } from './components/nodos';

import searchData from './utils/searchPokemon'
import {pokemonAleatory} from './utils/pokemonAleatory'
import pokemons from './utils/pokemons'

search.addEventListener('change', (e) => {
    pokemonContainer.innerHTML = " ";
    const currentValue = e.target.value;
    searchData(currentValue)
})


generatePokemon.addEventListener('click', () => {
    pokemonContainer.innerHTML = " ";
    pokemonAleatory()
});


document.addEventListener('DOMContentLoaded', pokemons); 