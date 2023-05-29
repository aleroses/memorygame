// Pasos: 
// 1. Crear una lista de números duplicados y luego desordenarlos al azar 
// 2. Crear un contador para cada vez que se haga un click en algún recuadro

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
// sort devuelve -  + or 0
let random = numbers.sort(() => Math.random() - 0.5);

let uncovered_cards = 0;
let card_one = null;
let card_two = null;

function uncovered(n){
    console.log(n);
    uncovered_cards++;
    /* console.log(uncovered_cards);  */

    if(uncovered_cards == 1){
        card_one = document.getElementById(n)
        card_one.innerHTML = 'Hola';
    }
}

