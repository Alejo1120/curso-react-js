
// npm run start inicializa el servidor

// npm run start inicializa el servidor
//funciones comunes en arreglos

//importacion con ejm de exportacion individual 
// import heroes,{owners} from './data/heores';

// console.log('mostramos exportacion individual:' , owners);

//importacion comun
import {heroes} from '../data/heores';

//funcion con find
 export const getheroebyId=(id)=>heroes.find( heroe => heroe.id ===id)
 
 console.log('buscamos por id:',getheroebyId(5) );

 //otro ejm con find
  const getheroebyName = (name) => heroes.find(heroe => heroe.name === name)
    console.log('buscamos por nombre:', getheroebyName('Batman'))

 //funcion con filter
 export const getheroesbyowner = (owner)=> heroes.filter((heroe)=> heroe.owner === owner)

 console.log(getheroesbyowner('Marvel'));