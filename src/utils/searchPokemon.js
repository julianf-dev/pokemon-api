import {POKEMON_API} from './API';
import { fetchData } from "./getData";

import notFound from '../pages/notFound'
import paintPokemon from '../components/paintPokemon';
import { pokemonContainer } from '../components/nodos';

const searchData = async (busqueda) => {
    try {
        
        if (!busqueda == " ") {
            
            const data =  await fetchData(`${POKEMON_API}/${busqueda.toLowerCase()}`)
            pokemonContainer.innerHTML = ""
            paintPokemon(data);
        }
        else {
            notFound()
        }

    } catch (error) {
        console.log(error);
    }
}

export default searchData;