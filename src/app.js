
const paintPokemon = (pokemon) => {
    return (
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
    )
}

const pokemonData = async () => {
    try {
        const pokemonHTMl = document.querySelector(".card-pokemon") 
        const idPokemon = Math.round(Math.random() * (1, 100));
        const API = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
        const res = await fetch(API);
        const data = await res.json();
        const pokemons = {
            name: data.name.toUpperCase(),
            image: data.sprites.other.dream_world.front_default,
            height: data.height,
            type: data.types[0].type.name,
            ability: data.abilities[0].ability.name,
        }
        const poke = paintPokemon(pokemons)
        pokemonHTMl.innerHTML = poke
    } catch (error) {
        console.log(error);
    }
}

const geratePokemon = document.getElementById("generate-pokemon");
geratePokemon.addEventListener('click',pokemonData);
document.addEventListener('DOMContentLoaded',pokemonData);