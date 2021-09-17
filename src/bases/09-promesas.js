//promesas

 import  {getheroebyId}  from "./bases/08-met-find-filter";

//asi se crea una promesa
// const promesa = new Promise( (resolve,reject)=>{

//     setTimeout( () =>{
//         const hero = getheroebyId(2);
//         resolve(hero);
//         //reject('no se encontro el resultado');
//     }, 2000)  //tarda 2 segundos en ejecutar y mostrar

// }); 

//then => sig que se realizo correctamente
//catch => sig que ubo un error
//sinaly => algo que se ejecuta luego de las dos anteriores (catch, then)

//  promesa.then((hero)=>{
//      console.log('heroe:',hero);
//  })
//  .catch(error=>console.warn(error));


const getheroByIdAsync = (id)=>{
    return new Promise( (resolve,reject)=>{
        setTimeout( () =>{
            const hero = getheroebyId(id);   //se busca el heroe con el id 
            if (hero){ 
                resolve(hero);  //si se encunetra el id que se muestre
            } else{
                reject(console.log('heroe no encontrado'))  //si no se encuentra q muestre msj por consola
            }
            
        }, 2000)  //tarda 2 segundos en ejecutar y mostrar
    
    }); 
    
}

getheroByIdAsync(4)
    .then(hero=>console.log('heroe:',hero))   //.then se ejecuta y este verifica que el id se encuentre, si esta muestra la info 
    .catch(console.warn)
    //asi funciona .catch( err =>console.warn(err));  // el error es por si el id no se encuentra, mostrara un msj por consola el cual lo redirecciona reject