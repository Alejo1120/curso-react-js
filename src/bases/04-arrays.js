
//arreglos

const arreglo = [1,2,3,4];


//... se hace una copia del array y se le agrega un nuevo dato
let arreglo2= [...arreglo,5];

//multiplica el arreglo cada dato x2
const arreglo3= arreglo2.map( function(numero){
    return numero * 2;
});

console.log(arreglo);  //[1,2,3,4]
console.log(arreglo2);  //[1,2,3,4,5]
console.log(arreglo3); //[2,4,6,8,10]