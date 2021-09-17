//funciones

// const saludar = function saludar (nombre){
//     return `hola, ${nombre}`
// };

// console.log(saludar('gohan'));

//funcion de flecha
const saludar2 = (nombre) =>{
    return `hola, ${nombre}`
};
console.log(saludar2('gohan'));

//otra forma de hacer mas ligera la funcion de flecha
const saludar3 = (nombre) =>`hola, ${nombre}`;
console.log(saludar3('gohan'));

//manera mas simple

// const saludar4 = ()=> `hola mundo a todos`;
// console.log(saludar4);


// const getuser = ()=>{
//     return{
//         id:1,
//         username:'goku',
//         password:1234,
//     }
// }
const getuser = ()=>({  
        id:1,
        username:'goku',
        password:1234,  
});

console.log(getuser);

const getuseract = (nombre)=>({
    id:2,
    username:'vegeta',
    password:456,
});
console.log(getuseract);
