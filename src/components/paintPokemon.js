import divNode from './divNode';
import { pokemonContainer } from './nodos';


function paintPokemon(pokemon) {

    const allItems = [];

    const article = document.createElement('article')
    article.classList.add('card-pokemon')

    const title = document.createElement('h2');
    title.textContent = pokemon.name.toUpperCase();

    const image = document.createElement('img');
    image.src = pokemon.sprites.other.dream_world.front_default;
    image.alt = pokemon.name;

    const info = document.createElement('div');
    info.className = 'pokemon-info'

    //Altura
    const height = divNode({
        property: pokemon.height,
        nameProperty: 'Height'
    });

    const ability = divNode({
        property: pokemon.abilities[0].ability.name,
        nameProperty: 'Ability'
    });

    //type
    const type = divNode({
        property: pokemon.types[0].type.name,
        nameProperty: 'Type'
    })

    //container 
    info.append(height, ability, type)

    //article container
    article.append(image, title, info)

    allItems.push(article)
    pokemonContainer.append(...allItems)

    return pokemonContainer
}


export default paintPokemon;