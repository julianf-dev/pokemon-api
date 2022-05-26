const appNode = document.querySelector('.cards-container')
const search = document.querySelector("#search");
const pokemonContainer = document.querySelector(".cards-container");


const divNode = ({
    property: characteristic,
    nameProperty: paragraph,

}) => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.className = "pokemon-info-detail";
    span.textContent = characteristic;
    const p = document.createElement('p');
    p.textContent = paragraph;
    div.append(span, p)

    return div;
}

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

const getDataAleatory = async () => {
    try {
        const idPokemon = Math.round(Math.random() * (1, 100));
        /* const API = `https://pokeapi.co/api/v2/pokemon/${idPokemon}` */
        const API = `https://pokeapi.co/api/v2/pokemon/?limit=10`
        const res = await fetch(API);
        const data = await res.json();
        const pokemons = data.results;
        pokemons.map(pokemon => {
            urlPokemons(pokemon.url);
        })
    } catch (error) {
        console.log(error);
    }
}

async function urlPokemons(pokemons) {
    try {
        const res = await fetch(pokemons);
        const data = await res.json();
        paintPokemon(data);
    }
    catch (error) {
        console.log(error);
    }
}

const getData = async (busqueda) => {
    try{
        const API = `https://pokeapi.co/api/v2/pokemon/?limit=500`
        const res = await fetch(API);
        const data = await res.json();
        const results = data.results;
        results.filter(item => {
            if (item.name.toLowerCase().includes(busqueda.toLowerCase())) {
                pokemonData(item.url)
            }
        })
    }catch (error){
        console.log(error);
    }

}

const pokemonData = async (response) => {
    try {
        const res = await fetch(response)
        const data = await res.json()
        paintPokemon(data);

    } catch (error) {
        console.log(error);
    }
}

search.addEventListener('change', (e) => {
    getData(e.target.value)
})


const geratePokemon = document.getElementById("generate-pokemon");
geratePokemon.addEventListener('click', () => {
    pokemonContainer.innerHTML = " ";
    getDataAleatory()
});
document.addEventListener('DOMContentLoaded', getDataAleatory); 