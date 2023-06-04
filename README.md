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

## .disabled

En JavaScript, la propiedad disabled se utiliza para deshabilitar o inhabilitar un elemento HTML. Cuando se establece en true, el elemento se desactiva y no se puede interactuar con él.

Por ejemplo, si tienes un botón HTML y lo asignas a una variable boton, puedes deshabilitar el botón utilizando la propiedad disabled de la siguiente manera:

```js
let boton = document.querySelector('#mi-boton');
boton.disabled = true;
```

## setTimeout

`setTimeout` es una función en JavaScript que permite retrasar la ejecución de una función o código en un número determinado de milisegundos. Su sintaxis es la siguiente:

```js
setTimeout(función, tiempo);
```

Donde `función` es la función que se ejecutará después de que transcurra el tiempo especificado en `tiempo`. `tiempo` es la cantidad de milisegundos que se esperarán antes de que se ejecute la función.

Por ejemplo, si queremos ejecutar una función llamada `saludar` después de 3 segundos, podríamos hacerlo de la siguiente manera:

```js
function saludar() {
  console.log("Hola!");
}

setTimeout(saludar, 3000); // Ejecuta la función 'saludar' después de 3 segundos (3000 milisegundos)
```

En este ejemplo, la función `saludar` se ejecutará después de que hayan transcurrido 3 segundos (3000 milisegundos) desde que se llamó a `setTimeout`.

También es posible pasar argumentos adicionales a la función que se va a ejecutar, simplemente incluyéndolos después de los primeros dos parámetros:

```js
function saludar(nombre) {
  console.log(`Hola ${nombre}!`);
}

setTimeout(saludar, 3000, "Juan"); // Ejecuta la función 'saludar' después de 3 segundos, pasando el argumento "Juan"
```

En este ejemplo, la función `saludar` recibirá el argumento `"Juan"` cuando se ejecute después de que hayan transcurrido 3 segundos.

Es importante tener en cuenta que `setTimeout` devuelve un valor entero que identifica el temporizador creado. Este valor puede ser utilizado para cancelar el temporizador antes de que se ejecute la función, utilizando la función `clearTimeout`:

```js
let temporizador = setTimeout(saludar, 3000);

// Cancela el temporizador antes de que se ejecute la función
clearTimeout(temporizador);
```

En resumen, `setTimeout` es una función muy útil en JavaScript que permite retrasar la ejecución de una función o código durante un período de tiempo específico.

## card_two.innerText = ' '

La línea de código `card_two.innerText = ' ';` en JavaScript se utiliza para establecer el contenido de texto del elemento HTML con el identificador `card_two` en una cadena vacía. Esto significa que cualquier contenido de texto que anteriormente estuviera dentro de ese elemento HTML será eliminado y reemplazado por una cadena vacía.

Este código puede ser útil si deseas borrar el contenido de un elemento HTML específico, como una etiqueta `<div>` o un `<p>`, antes de agregar nuevo contenido dinámicamente con JavaScript. Por ejemplo, si tienes una página web que muestra información actualizada en tiempo real, puedes usar esta línea de código para borrar el contenido anterior antes de agregar el nuevo contenido.

Es importante tener en cuenta que esta línea de código solo afectará el contenido de texto dentro del elemento HTML, no afectará a ningún elemento hijo o cualquier otro atributo del elemento HTML. Además, si el elemento HTML no existe en la página web o si el identificador no es correcto, se producirá un error en la consola de JavaScript.

## setInterval()

`setInterval` es una función en JavaScript que permite ejecutar una función o código repetidamente después de un intervalo de tiempo especificado. Su sintaxis es la siguiente:

```js
setInterval(función, tiempo);
```

Donde `función` es la función que se ejecutará cada vez que transcurra el tiempo especificado en `tiempo`. `tiempo` es la cantidad de milisegundos entre cada ejecución de la función.

Por ejemplo, si queremos ejecutar una función llamada `actualizarDatos` cada 5 segundos, podríamos hacerlo de la siguiente manera:

```js
function actualizarDatos() {
  console.log("Actualizando datos...");
}

setInterval(actualizarDatos, 5000); // Ejecuta la función 'actualizarDatos' cada 5 segundos (5000 milisegundos)
```

En este ejemplo, la función `actualizarDatos` se ejecutará cada 5 segundos (5000 milisegundos) después de que se llamó a `setInterval`.

También es posible pasar argumentos adicionales a la función que se va a ejecutar, simplemente incluyéndolos después de los primeros dos parámetros:

```js
function actualizarDatos(datos) {
  console.log(`Actualizando datos: ${datos}`);
}

setInterval(actualizarDatos, 5000, "datos importantes"); // Ejecuta la función 'actualizarDatos' cada 5 segundos, pasando el argumento "datos importantes"
```

En este ejemplo, la función `actualizarDatos` recibirá el argumento `"datos importantes"` cada vez que se ejecute cada 5 segundos.

Es importante tener en cuenta que `setInterval` devuelve un valor entero que identifica el temporizador creado. Este valor puede ser utilizado para detener el temporizador en cualquier momento, utilizando la función `clearInterval`:

```js
let temporizador = setInterval(actualizarDatos, 5000);

// Detiene el temporizador después de 30 segundos
setTimeout(() => {
  clearInterval(temporizador);
}, 30000);
```

En resumen, `setInterval` es una función muy útil en JavaScript que permite ejecutar una función o código repetidamente después de un intervalo de tiempo especificado.

## class="visible"

```html
<button id="restart-button" class="visible">Play again</button>
```

## .classList

La propiedad `.classList` en JavaScript es una propiedad que está disponible en los elementos del DOM y permite acceder y manipular las clases CSS de un elemento de forma programática.

La propiedad `.classList` es un objeto que tiene varios métodos que permiten agregar, eliminar, verificar y alternar clases CSS en un elemento sin tener que manipular directamente la propiedad `className` del elemento.

A continuación te muestro algunos ejemplos de cómo puedes usar la propiedad `.classList` en JavaScript:

1. Agregar una clase CSS a un elemento:

```js
const myElement = document.querySelector('.my-element');
myElement.classList.add('my-class');
```

En este ejemplo, se selecciona un elemento con la clase `.my-element` y se le agrega la clase CSS `.my-class` utilizando el método `.add()` de la propiedad `.classList`.

2. Eliminar una clase CSS de un elemento:

```js
const myElement = document.querySelector('.my-element');
myElement.classList.remove('my-class');
```

En este ejemplo, se selecciona un elemento con la clase `.my-element` y se le elimina la clase CSS `.my-class` utilizando el método `.remove()` de la propiedad `.classList`.

3. Verificar si un elemento tiene una clase CSS:

```js
const myElement = document.querySelector('.my-element');
if (myElement.classList.contains('my-class')) {
  // El elemento tiene la clase CSS .my-class
}
```

En este ejemplo, se selecciona un elemento con la clase `.my-element` y se verifica si tiene la clase CSS `.my-class` utilizando el método `.contains()` de la propiedad `.classList`.

4. Alternar una clase CSS en un elemento:

```js
const myElement = document.querySelector('.my-element');
myElement.classList.toggle('my-class');
```

En este ejemplo, se selecciona un elemento con la clase `.my-element` y se alterna la clase CSS `.my-class` utilizando el método `.toggle()` de la propiedad `.classList`. Si el elemento ya tiene la clase CSS, se la quita; si no la tiene, se la agrega.

Estos son solo algunos ejemplos de cómo puedes usar la propiedad `.classList` en JavaScript. Hay otros métodos disponibles, como `.replace()` y `.item()`, que también pueden ser útiles en diferentes situaciones.

## `left: calc(50% - 50px);`  Menos la mitad del width

La función `calc()` en CSS te permite realizar operaciones matemáticas simples en tus valores de estilo. Esto puede ser útil para establecer propiedades como el ancho, la altura, el margen o el padding, y realizar cálculos basados en porcentajes, pixeles, ems y otras unidades de medida.

La sintaxis básica de `calc()` es la siguiente:

```css
propiedad: calc(expresión);
```

Donde `propiedad` es la propiedad CSS que deseas establecer y `expresión` es la operación matemática que deseas realizar.

Por ejemplo, si quisieras establecer el ancho de un elemento en el 50% del ancho de su contenedor menos 20 píxeles, podrías hacerlo de la siguiente manera:

```css
width: calc(50% - 20px);
```

Del mismo modo, si quisieras establecer el padding de un elemento en el 10% de su ancho más 5 píxeles, podrías hacerlo de esta manera:

```css
padding: calc(10% + 5px);
```

También puedes utilizar `calc()` para combinar diferentes unidades de medida. Por ejemplo, si quisieras establecer la altura de un elemento en el 30% del ancho de su contenedor más 50 ems, podrías hacerlo de esta manera:

```css
height: calc(30% + 50em);
```

Puedes utilizar `calc()` en cualquier propiedad CSS que acepte valores numéricos, como `width`, `height`, `margin`, `padding`, `font-size`, entre otras.

Espero que esto te ayude a comprender cómo utilizar la función `calc()` en CSS.

## `display: none;`

La propiedad CSS que es opuesta a `display: none;` es `display: block;`, que hace que el elemento sea visible y tenga un tamaño de bloque, es decir, ocupa todo el ancho disponible y comienza en una nueva línea.

`display: none;` oculta completamente el elemento y elimina su espacio en la página, mientras que `display: block;` hace que el elemento sea visible y ocupa un espacio en la página.

Sin embargo, ten en cuenta que `display: block;` solo es la propiedad opuesta en el caso de elementos que son de nivel de bloque (`<div>`, `<p>`, `<h1>`, etc.) o que se han convertido en elementos de nivel de bloque utilizando otras propiedades CSS como `display: flex;` o `display: grid;`. Para elementos de nivel de línea (`<span>`, `<a>`, etc.), la propiedad opuesta a `display: none;` es `display: inline;`.

En resumen, si deseas mostrar un elemento que ha sido ocultado con `display: none;`, debes cambiar su propiedad `display` a `block` o `inline`, según sea el caso.

## `position: absolute;`

Lo contrario es `position: static;`

## Recargar una página

Para recargar una página usando JavaScript, puedes utilizar la función `location.reload()`.

Esta función recarga la página actual con todas las solicitudes de red y los recursos necesarios cargados nuevamente. Asegúrate de llamar a esta función en el contexto adecuado, por ejemplo, dentro de un evento de click de un botón. 

Aquí te dejo un ejemplo de cómo podrías usar la función `location.reload()`:

```html
<button onclick="reloadPage()">Recargar página</button>
```

```js
function reloadPage() {
  location.reload();
}
```

En este ejemplo, cuando se hace clic en el botón, se llama a la función `reloadPage()` que a su vez llama a la función `location.reload()`, recargando así la página.
