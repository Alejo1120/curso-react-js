// npm run start inicializa el servidor
// desestructuracion de arreglos


const personajes =['goku','vegeta','goten'];

const[ , ,go] = personajes;  //los espaciados es pa saber que dato quiere obtener en la desestructuracion

console.log(go);  //imp goten


//desestructuracion con funciones
const retornaarreglo = ()=>{
    return['abc',123];
}

const [leter,num] = retornaarreglo();
console.log(leter,num);  //imp 'abc' 123



const usestate = (valor)=>{
    return [valor,()=>{
        console.log('hola mundo');
        const verl = 'bola9';
        console.log(verl);
    }]
}

const [nombre,setnombre,bola] = usestate('picoro');

console.log(nombre,bola);
setnombre();
