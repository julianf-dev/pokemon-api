import {pokemonContainer} from './nodos'

import '../styles/buttons.scss'

const paintButton = (currentPage) => {

    pokemonContainer.classList.add('search-container');

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons');
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = "ver más";
    button.setAttribute('id','charge-more');
    divButtons.appendChild(button)

    pokemonContainer.insertAdjacentElement('beforeend',divButtons);

    divButtons.addEventListener('click', (e) => {
        if (e.target.id == 'charge-more'){
            
        }
    }
    )

    return pokemonContainer;
}

export {paintButton};