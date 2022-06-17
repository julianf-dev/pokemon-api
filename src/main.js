import {search, generatePokemon, pokemonContainer } from './components/nodos';

import './styles/style.scss';
import './styles/buttons.scss';

import searchData from './utils/searchPokemon'
import {pokemonAleatory} from './utils/pokemonAleatory'
import pokemons from './utils/pokemons'

search.addEventListener('change', (e) => {
    const currentValue = e.target.value;
    searchData(currentValue);
})


generatePokemon.addEventListener('click', () => {
    pokemonAleatory()
});



document.addEventListener('DOMContentLoaded', pokemons); 