// // const element = document.createElement('h1');
// // element.innerText = 'Hello, Platzi Badges!';

// // const container = document.getElementById('app');

// // container.appendChild(element);

// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // const element = <h1>Hello, Platzi Badges!</h1>;

// // const container = document.getElementById('app');

// // // ReactDOM.render(__qué__, __dónde__);
// // ReactDOM.render(element, container);

// // Para utilizar html en js es necesario importar react.
// import React from 'react';
// import ReactDOM from 'react-dom';
// const element = <h1>Hello, Platzi Badges!</h1>
// const container = document.getElementById('app');

// // ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);

// const elementoDos = React.createElement('h1', {}, 'Hola! Soy los children.');

// ReactDOM.render(elementoDos, container);

// const elementTres = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi');

// ReactDOM.render(elementTres, container);

// const name = 'Michel con jsx';
// const elementCuatro = React.createElement('h1', {}, `Hola, soy ${name}`);

// ReactDOM.render(elementCuatro, container);

// const elementCinco = <h1>Hola soy {name}</h1>
// ReactDOM.render(elementCinco, container);

// const suma = ()=> 2 + 2;
// const elementSeis = <h1> Suma: {suma()}</h1>

// ReactDOM.render(elementSeis, container);

// // Los valores nulos, indefinidos, false no se van a ver.
// const vacio = "";
// const nulo = null;
// const falso = false;
// const indefinido = undefined;
// const elementSiete = <h1>String vacío: {vacio}
//                          Nulo: {nulo} Falso: {falso} Indefinido: {indefinido}</h1>;
// ReactDOM.render(elementSiete, container);

// const elementOcho = (
//     <div>
//         <h1>Hola soy michel</h1>
//         <p>Soy bailarín, linguista, matemático, pintor e ingeniero de software</p>
//     </div>);
// ReactDOM.render(elementOcho, container);
import React from "react";
import ReactDOM from "react-dom";
// Importando bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// Importando estilos globales
import "./global.css";

// import Badge from "./components/lBadge";

import App from './components/App';



const container = document.getElementById("app");
ReactDOM.render(<App/>, container);

// //props
// firstName="Lilly" 
// lastName="Kaufman"
// jobTitle = "La vida"
// twitter = "michaelOlmos"
// avatarUrl = "https://www.gravatar.com/avatar?d=identicon"
