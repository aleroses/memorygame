// Pasos: 
// 1. Crear una lista de números duplicados y luego desordenarlos al azar 
// 2. Crear un contador para cada vez que se haga un click en algún recuadro

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let random = numbers.sort(() => Math.random() - 0.5);

let cards = document.getElementById('cards');
let card;
let index;

let uncovered_cards = 0;


cards.addEventListener('click', find_index);

function find_index(event){
    if(event.target.tagName === 'BUTTON'){
        card = document.getElementsByTagName('div')
        index = Array.prototype.indexOf.call(card, event.target.parentNode);

        console.log(index);
        return index;
    }
}

function uncovered_card(index){

}

/* let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let random = numbers.sort(() => Math.random() - 0.5);

let cards = document.querySelector('#cards');
cards.addEventListener('click', find_index);

function find_index(event){
    console.log(event);
    // Al hacer clic arroja todas las propiedades dispinibles de ese event
    // entre ellas target que muestra la etiqueta button#0.card
    // dentro de target tambien podemos ver tagName:"BUTTON"
    if(event.target.tagName == 'BUTTON'){
        let card = document.getElementsByTagName('div');
        let index = Array.prototype.indexOf.call(card, event.target.parentNode);

        console.log(index);
    }
} */

