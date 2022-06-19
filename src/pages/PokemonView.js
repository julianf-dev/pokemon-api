import { NodeDiv } from '../components/NodeDiv';
import { pokemonContainer, buttonsContainer } from '../components/Nodos';
import { Pokemon } from '../utils/Pokemon';

import '../styles/paintPokemon.scss'

function PokemonView(pokemon) {

    const allItems = [];

    const article = document.createElement('article')
    article.classList.add('card-pokemon')
    article.setAttribute('id', pokemon.id)

    const title = document.createElement('h2');
    title.textContent = pokemon.name.toUpperCase();

    const image = document.createElement('img');
    image.src = pokemon.sprites.other.dream_world.front_default;
    image.alt = pokemon.name;

    const info = document.createElement('div');
    info.className = 'pokemon-info'

    //Altura
    const height = NodeDiv({
        property: pokemon.height,
        nameProperty: 'Height'
    });

    const ability = NodeDiv({
        property: pokemon.abilities[0].ability.name,
        nameProperty: 'Ability'
    });

    //type
    const type = NodeDiv({
        property: pokemon.types[0].type.name,
        nameProperty: 'Type'
    })

    //container 
    info.append(height, ability, type)

    //article container
    article.append(image, title, info)

    allItems.push(article)

    article.addEventListener('click',(e) => {
            if (buttonsContainer){
                buttonsContainer.remove()
            }
            Pokemon(pokemon.id)
    })
    pokemonContainer.append(...allItems)

    return pokemonContainer
}


export  { PokemonView };