import { buttonsContainer } from './Nodos'
import { Pokemons } from '../utils/pokemons';


const Button = (page) => {

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = "ver más";
    button.setAttribute('id', 'charge-more');
    buttonsContainer.appendChild(button)

    button.addEventListener('click', (e) => {
        if (e.target.id == 'charge-more') {
            Pokemons(page);
            button.remove()
        }
    })

    return buttonsContainer;
}

export { Button };