// Pasos: 
// 1. Crear una lista de números duplicados y luego desordenarlos al azar 
// 2. Encontrar el index de cada card según se haga clic (event.target.tagName, parentNode)
// 3. Crear un contador para cada vez que se haga un click en alguna card
// 4. Mostrar un primer y segundo numero random en una card y luego deshabilitar las card (.disabled = true)
// 5. Detectar la cantidad de moviemientos realizados por el jugador y mostrarlo en el pantalla 
// 6. Verificar si la primera tarjeta es igual a la segunda  e incrementar los aciertos en pantalla, así como los intentos exitosos 


let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let random = numbers.sort(() => Math.random() - 0.5);
console.log(random);

let cards = document.getElementById('cards');
let p_movements = document.getElementById('movements');
let p_successful_attempts = document.getElementById('successful-attempts');

let card;
let index;

let uncovered_cards = 0;
let card_one = undefined;
let card_two = undefined;
let first_result = undefined;
let second_result = undefined;

let movements = 0;
let successful_attempts = 0;

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

        card_one.disabled = true;
    }else if(uncovered_cards == 2){
        card_two = document.getElementById(index);
        second_result = random[index];
        card_two.innerText = second_result;

        card_two.disabled = true;

        // Cada vez que destapamos 2 tarjetas es 1 movimiento
        movements++;
        p_movements.innerText = `Movements: ${movements}`;

        if(first_result == second_result){
            // uncovered_cards volver a 0
            uncovered_cards = 0;

            // Incrementamos aciertos 
            successful_attempts++;
            p_successful_attempts.innerText = `Successful attempts: ${successful_attempts}`;
        }
    }

    // Deshabilitar primer boton 
    card_one.disabled = true;
}


