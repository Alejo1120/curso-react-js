//objeto {}
const persona ={
    nombre :'alejo',
    apellido: 'cedeño',
    edad: 20,
    dirreccion :{    //obj dentro de un obj
        ciudad:'san Diego',
        zip: 123456,
        lat: 14.3232,
        lng: 34.698789
    }
};

const persona2={...persona} //..persona clondel obj de persona


//imprimir obj
console.log(persona);
console.log(persona2);
//console.table(persona);