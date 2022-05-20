const appNode = document.querySelector('.cards-container')


const paintPokemon = (container, pokemon) => {
    container.innerHTML = " ";
    
    const allItems = [];

    const title = document.createElement('h2');
    title.textContent = pokemon.name.toUpperCase();
    const image = document.createElement('img');
    image.src = pokemon.image;
    image.alt = pokemon.name;

    const info = document.createElement('div');
    info.className = 'pokemon-info'

    //Altura
    const height = document.createElement('div');
    const heightSpan = document.createElement('span');
    heightSpan.className = "pokemon-info-detail";
    heightSpan.textContent = pokemon.height;
    const heightParagraph = document.createElement('p');
    heightParagraph.textContent = 'Height';
    height.append(heightSpan,heightParagraph);

    //Ability
    const ability = document.createElement('div');
    const abilitySpan = document.createElement('span');
    abilitySpan.className = "pokemon-info-detail";
    abilitySpan.textContent = pokemon.ability;
    const abilityParagraph = document.createElement('p');
    abilityParagraph.textContent = 'Ability';
    ability.append(abilitySpan,abilityParagraph);

    //type

    const type = document.createElement('div');
    const typeSpan = document.createElement('span');
    typeSpan.className = "pokemon-info-detail";
    typeSpan.textContent = pokemon.type;
    const typeParagraph = document.createElement('p');
    typeParagraph.textContent = 'Type';
    type.append(typeSpan,typeParagraph);

    //container 
    info.append(height,ability, type)

    //article container
    container.append(image,title,info)
    allItems.push(container)

    return allItems
/*   return (
        `
        <img src="${pokemon.image}"  alt=${pokemon.name} loading="lazy">
        <h2>${pokemon.name}</h2>
        <div class="pokemon-info" >
            <div>
                <span class="pokemon-info-detail">${pokemon.height}</span>
                <p>Height</p>
            </div>
            <div>
                <span class="pokemon-info-detail">${pokemon.ability}</span>
                <p>Ability</p>
            </div>
            <div>
                <span class="pokemon-info-detail">${pokemon.type}</span>
                <p>Type</p>
            </div>
        </div>
        `
    ) */
}

const pokemonData = async () => {
    try {
        const pokemonContainer = document.querySelector(".card-pokemon") 
        const idPokemon = Math.round(Math.random() * (1, 100));
        const API = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
        const res = await fetch(API);
        const data = await res.json();
        const pokemons = {
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
            height: data.height,
            type: data.types[0].type.name,
            ability: data.abilities[0].ability.name,
        }
        paintPokemon(pokemonContainer, pokemons)
        
    } catch (error) {
        console.log(error);
    }
}

const geratePokemon = document.getElementById("generate-pokemon");
geratePokemon.addEventListener('click',pokemonData);
document.addEventListener('DOMContentLoaded',pokemonData);