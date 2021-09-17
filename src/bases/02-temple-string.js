const nombre ='alejandro';
const apellido = 'cedeno';

//ejm de temple script
//const name_complet = nombre + ' ' + apellido;

// ejm de temple string y concatenacion de variables
const comit=`
${nombre}
${apellido}
${50+50}`;

console.log('su nombre completo es:'+comit);

function getsaludo(nombre){
    return `hello word ` + nombre;
}

console.log(`este es un texto de saludo: ${getsaludo(nombre)}`)