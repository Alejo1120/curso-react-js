// npm run start inicializa el servidor
//funciones comunes en arreglos

import { simpsons } from "./data/personajes-simpson";


//funcion con find
 const getheroebyId=(id)=>simpsons.find( amarillo => amarillo.id ===id)
 
 console.log('buscamos por id personaje simpsons:',getheroebyId(3) );

 //otro ejm con find
 const getheroebyNamepeople = (name) => simpsons.find(genio => genio.name === name)
console.log('buscamos por nombre del personaje : ', getheroebyNamepeople('homero'))

 //funcion con filter
 const getheroesbyowner = (working)=> simpsons.filter((rol)=> rol.working === working)

 console.log(getheroesbyowner('escuela'));