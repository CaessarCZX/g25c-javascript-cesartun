/*Ejercicio 1
Representar el diagrama de flujo 6.3.1 que esta en ./assets con js y condicionales. 

const lamp = {
    isPlugged: false,
    moltenFocus: false,
    itWorks: false,
    verifyOperation: function() {
        alert(`Encendido: ${this.itWorks}\nEnchufado: ${this.isPlugged}\nFoco fundido: ${this.moltenFocus}`);
    }
}

alert('Ejercicio 1: Funcionamiento de una lampara\nSituación: Lampara no funciona');

lamp.isPlugged = confirm('¿Esta enchufada la lampara?');
if(lamp.isPlugged) {
    lamp.moltenFocus = confirm('¿El foco esta fundido?');
   if(lamp.moltenFocus) {
       alert('Reemplaza el foco, quiza así funcione');
       lamp.verifyOperation();
    } else {
        alert('Es momento de comprar una nueva lampara');
        lamp.verifyOperation();
   }
} else {
    alert('Conecta la lampara, quiza por eso no funcione ');
    lamp.verifyOperation();
} */

/*Ejercicio 2
El usuario va a ingresar por teclado prompt el nombre de una pelicula, decirle quien es el director alert. 

const moviesList_1 = {
  "El Padrino": "Francis Ford Coppola",
  "Titanic": "James Cameron",
  "Avatar": "James Cameron",
  "El Señor de los Anillos": "Peter Jackson",
  "El Rey León": "Roger Allers and Rob Minkoff"
};

const namesOfMovies = Object.keys(moviesList_1);

const searchMovie = prompt('Ejercicio 2: Descubre al director\n' + namesOfMovies + '\nIngresa el nombre de una pelicula de la lista:');

if (moviesList_1[searchMovie]) {
    alert(`El director de "${searchMovie}" es ${moviesList_1[searchMovie]}`);
} else {
    alert(`No se encontro director`);
} */

/*Ejercicio 3
Definir un arreglo de objetos peliculas donde tengan una propiedad isFree, el usuario debe ingresar el nombre de una pelicula y el sistema le respondera si puede ver la pelicula o sino puede, decirles el precio. 

const moviesListAndFeatures = [
    {
       nameMovie: 'Mario Bros',
       isFree: false,
       payPerView: 10.2
    },
    {
       nameMovie: 'Matrix',
       isFree: true,
       payPerView: 0
    },
    {
       nameMovie: 'Rapidos y furiosos',
       isFree: true,
       payPerView: 0
    },
    {
       nameMovie: 'La Ballena',
       isFree: false,
       payPerView: 12.5
    }
];

const namesOfMovies1 = moviesListAndFeatures.map(movie => movie.nameMovie);

const userSearchMovie = prompt('Ejercicio 3: Pelicula gratis?\n' + namesOfMovies1 + '\nIngresa el nombre de una pelicula de la lista:');

const verifyMovie = moviesListAndFeatures.some(movie => movie['nameMovie'].toUpperCase() === userSearchMovie.toUpperCase());
alert(verifyMovie);

if (verifyMovie) {
    const indexMovie = moviesListAndFeatures.findIndex(movie => movie.nameMovie.toUpperCase() === userSearchMovie.toUpperCase());
    const statusMovie = (moviesListAndFeatures[indexMovie].isFree) ? 'Gratuita' : 'de Paga';
    const messageOut = `La pelicula: ${moviesListAndFeatures[indexMovie].nameMovie.toUpperCase()} es ${statusMovie}`;
    if (moviesListAndFeatures[indexMovie].isFree) {
        alert(messageOut);
    } else {
        alert(`${messageOut} y cuesta $${moviesListAndFeatures[indexMovie].payPerView}`);
    }
} else {
    alert('La pelicula no se encuentra');
} */

/*Ejercicio 4
Hacer un switch case donde al escribir un numero de mes, nos imprima el nombre. 

const nameOfMont = +prompt('Escribe el numero de un mes');

switch (nameOfMont) {
    case 1:
        alert('Es Enero');
        break;
    case 2:
        alert('Es Febrero');
        break;
    case 3:
        alert('Es Marzo');
        break;
    case 4:
        alert('Es Abril');
        break;
    case 5:
        alert('Es Mayo');
        break;
    case 6:
        alert('Es Junio');
        break;    
    case 7:
        alert('Es Julio');
        break;
    case 8:
        alert('Es Agosto');
        break;
    case 9:
        alert('Es Septiembre');
        break;
    case 10:
        alert('Es Octubre');
        break;
    case 11:
        alert('Es Noviembre');
        break;
    case 12:
        alert('Es Diciembre');
        break;
    default:
        alert('No reconozco ese valor');
        break;
} */

/*Ejercicio 5
Hacer un diagrama/dibujo/notas/nada sobre las tablas de verdad (hacer un ejemplo en JS) 

//En este ejemplo ponemos a prueba las tablas de verdad con los 
//operadores lógicos && y ||

alert('Ejercicio 5: Tablas de verdad')
const factorOne = confirm('Elige el valor del primer valor\nAceptar = true      Cancelar = false')
const factorTwo = confirm('Elige el valor del segundo valor\nAceptar = true      Cancelar = false')
let messageShowAnd;
let messageShowOr

// &&(AND)
if (factorOne && factorTwo) {
    messageShowAnd = `El valor del elemento es [TRUE] porque\n primer valor = (${factorOne})  y segundo valor = (${factorTwo})`;
} else {
    messageShowAnd = `El valor del elemento es [FALSE] porque\n primer valor = (${factorOne})  y segundo valor = (${factorTwo})`;
}
// ||(OR)
if (factorOne || factorTwo) {
    const valueTrue = (factorOne) ? `primer valor = (${factorOne})` : `segundo valor = ${factorTwo}`;
    messageShowOr = `El valor del elemento es [TRUE] porque\n${valueTrue}`; 
} else {
    messageShowOr = `El valor del elemento es [FALSE] porque\n primer valor = (${factorOne})  y segundo valor = (${factorTwo})`;
}

alert(`Condicional 'AND':\n${messageShowAnd}\nCondicional 'OR' :\n${messageShowOr}`);   */
