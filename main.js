// Pasos: 
// 1. Crear una lista de números duplicados y luego desordenarlos al azar 
// 2. Encontrar el index de cada card según se haga clic (event.target.tagName)
// 3. Crear un contador para cada vez que se haga un click en alguna card
// 4. Mostrar algún numero en una card y luego deshabilitar la card (.disabled)

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let random = numbers.sort(() => Math.random() - 0.5);
console.log(random);

let cards = document.getElementById('cards');
let card;
let index;

let uncovered_cards = 0;
let card_one = undefined;
let card_two = undefined;

let first_result = undefined;
let second_result = undefined;

cards.addEventListener('click', find_index);

function find_index(event){
    console.log(event);
    // Al hacer clic arroja todas las propiedades dispinibles de ese event
    // entre ellas target que muestra la etiqueta button#0.card
    // dentro de target tambien podemos ver tagName:"BUTTON"
    if(event.target.tagName === 'BUTTON'){
        card = document.getElementsByTagName('div')
        index = Array.prototype.indexOf.call(card, event.target.parentNode);

        console.log('Index', index);
        uncovered(index);
    }
}

function uncovered(index){
    uncovered_cards++;
    console.log(uncovered_cards);

    if(uncovered_cards == 1){
        // Mostrar primer número
        card_one = document.getElementById(index);
        first_result = random[index];
        card_one.innerText = first_result;
    }

    // Deshabilitar primer boton 
    card_one.disabled = true;
}


