import {pokemonContainer} from '../components/Nodos'

import { Pokemon } from '../utils/Pokemon'

const Buttons = (currentPokemon) => {

    pokemonContainer.classList.add('search-container');

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons-container');
    const buttonLeft = document.createElement('button');
    buttonLeft.classList.add('button');
    buttonLeft.textContent = "Previous";
    buttonLeft.setAttribute('id','button-left');
    const buttonRigth = document.createElement('button');
    buttonRigth.classList.add('button');
    buttonRigth.textContent = "Next";
    buttonRigth.setAttribute('id','button-right');

    divButtons.append(buttonLeft,buttonRigth);

    pokemonContainer.insertAdjacentElement('beforeend',divButtons);

    divButtons.addEventListener('click', (e) => {
        if (e.target.id == 'button-left'){
            if(currentPokemon.id == 1){
                currentPokemon.id = 201;
            }
            Pokemon(currentPokemon.id - 1)
        }
        if(e.target.id == 'button-right'){
            if(currentPokemon.id === 200){
                currentPokemon.id = 0;
            }
            Pokemon(currentPokemon.id + 1)

        }
    }
    )

    return pokemonContainer;
}

export { Buttons };