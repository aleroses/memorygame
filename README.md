# memorygame

This is a memory game that displays or hides cards as you correctly match pairs of the initially displayed card.

## Explicación

Preparamos el html:

```js
<body>
    <main class="main-container">
        <header>
            <h1>Memory game</h1>
        </header>
        <section id="cards" class="cards-section">
            <div><button id="0" class="card"></button></div>
            <div><button id="1" class="card"></button></div>
            <div><button id="2" class="card"></button></div>
            <div><button id="3" class="card"></button></div>
            <div><button id="4" class="card"></button></div>
            <div><button id="5" class="card"></button></div>
            <div><button id="6" class="card"></button></div>
            <div><button id="7" class="card"></button></div>
            <div><button id="8" class="card"></button></div>
            <div><button id="9" class="card"></button></div>
            <div><button id="10" class="card"></button></div>
            <div><button id="11" class="card"></button></div>
            <div><button id="12" class="card"></button></div>
            <div><button id="13" class="card"></button></div>
            <div><button id="14" class="card"></button></div>
            <div><button id="15" class="card"></button></div>
        </section>
        <aside class="side-container">
            <p class="statistics successful-attempts">Successful attempts: 0</p>
            <p class="statistics time-left">Time: 30 seconds</p>
            <p class="statistics movements">Movements: 0</p>
        </aside>
    </main>
    <footer>
        <p>Game developed by <a href="https://github.com/aleroses">Ale Roses</a></p>
    </footer>
    <script src="./main.js"></script>
</body>
```

Usamos sort y Math.random - 0.5 para desordenar una lista de manera aleatoria.

```js
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let random = numbers.sort(() => Math.random() - 0.5);
```

Detectamos el indice de cada button.

1. Array.prototype.indexOf es una propiedad que hace referencia al método indexOf() de la clase Array. Esta propiedad es heredada por todas las matrices en JavaScript.

2. call() es un método que se puede utilizar en cualquier función en JavaScript. Se utiliza para llamar a una función con un objeto específico como su contexto. En este caso, utilizamos call() para llamar a indexOf() con la colección de elementos como su contexto.

3. Pasamos la colección de elementos como el primer argumento de call(), que establece el contexto de la función. Luego, pasamos el elemento que queremos buscar como el segundo argumento de call(), que se convierte en el parámetro para indexOf().

```js
let cards = document.getElementById('cards');

cards.addEventListener('click', find_index);

function find_index(event){
    if(event.target.tagName === 'BUTTON'){
        let card = document.getElementsByTagName('div')
        // Array.prototype.indexOf.call(array, elemento);
        let index = Array.prototype.indexOf.call(card, event.target.parentNode);

        console.log(index);
    }
}
```

En este ejemplo, agregamos un controlador de eventos click al elemento `<section>` con el id "cards". Dentro del controlador de eventos, verificamos si el elemento que se hizo clic es un botón utilizando la **propiedad tagName del objeto event.target**. Si es así, utilizamos getElementsByTagName() para seleccionar todos los elementos `<div>` de la lista. Luego, utilizamos Array.prototype.indexOf.call() para buscar el índice del elemento que contiene el botón que se hizo clic. El método call() nos permite utilizar el método indexOf() de la clase `Array en la colección de elementos de la lista.

`Array.prototype.indexOf.call(array, elemento);`
En este caso, array es el objeto card, que es una lista de nodos que se obtuvieron con getElementsByTagName(). elemento es el nodo del botón padre que se obtuvo con event.target.parentNode.

Al hacer clic en uno de los botones, se llamará al controlador de eventos y se buscará el índice del elemento correspondiente. Puedes utilizar este índice para realizar cualquier acción adicional que necesites en tu código.

event.target es una propiedad de los objetos de eventos en JavaScript que hace referencia al elemento HTML que desencadenó el evento. Es decir, event.target devuelve el elemento en el que se hizo clic o que se activó para desencadenar el evento.

Por ejemplo, si tienes un botón dentro de un elemento `<div>` y has agregado un controlador de eventos click al elemento `<div>`, event.target devolverá el botón si se hace clic en él.

Puedes utilizar event.target para obtener información sobre el elemento que desencadenó el evento y realizar acciones específicas en función de ese elemento.

En el ejemplo que proporcionaste, event.target se utiliza para comprobar si el elemento que desencadenó el evento click es un botón. Si el elemento es un botón, se utiliza event.target.parentNode para acceder al elemento padre del botón, es decir, el elemento que contiene el botón.
