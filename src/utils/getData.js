

export const fetchData = async (API) =>{
    try{
        const res = await fetch(API);
        const data = await res.json();

        return data;
    }   
    catch (error){
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