import {search, generatePokemon,buttonsContainer } from './components/Nodos';

import './styles/style.scss';

import { DataSearch} from './utils/DataSearch'
import { Pokemon } from './utils/Pokemon'
import { Pokemons } from './utils/Pokemons'

let page = 0;


search.addEventListener('change', (e) => {
    if (buttonsContainer){
        buttonsContainer.remove()
    }
    const currentValue = e.target.value;
    DataSearch(currentValue);
})

generatePokemon.addEventListener('click', () => {
    if (buttonsContainer){
        buttonsContainer.remove()
    }
    Pokemon()
});

document.addEventListener('DOMContentLoaded', () => {
    Pokemons(page);
}); 