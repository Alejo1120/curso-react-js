// npm run start inicializa el servidor
// desestructuracion

 const persona = {
     nombre: 'alejandro',
     edad:20,
     clave:'super dev',
  
 };

const usecontext = ({nombre, edad,clave, rango= 'programing'})=>{

    //console.log( nombre,edad,rango);

    return {
        nameclave: clave,
        year: edad,
        latitud:{
            lat:12523,
            longi:-5789
        }
    }
}

const {nameclave,year,latitud:{lat, longi}} = usecontext( persona); //desestructuracion del obj

console.log(nameclave,year);
console.log(lat,longi); //mostrar datos de obj desestructorizado y acceder a la longi y lati
