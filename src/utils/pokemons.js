import {POKEMON_API} from './API';

import { fetchData } from "./getData";

import { PokemonView } from '../pages/PokemonView';
import { Button } from '../components/Button'

async function Pokemons(page){
    try {
        const url = `${POKEMON_API}/?offset=${page}&limit=20`;
        const data = await fetchData(url);    
        const pokemons = data.results;
        pokemons.map(pokemon => {
            urlPokemons(pokemon.url)
        })
        if (page <= 180){
            page += 20;
            Button(page)
        }
    } catch (error) {
        console.log(error);
    }
}

async function urlPokemons(pokemons) {
    try {
        const data = await fetchData(pokemons)
        PokemonView(data);
    }
    catch (error) {
        console.log(error);
    }
}

export  { Pokemons }