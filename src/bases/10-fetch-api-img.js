//uso de librerias para hacer peticiones fetch API
//uso de gif animados

const apikey = 'ki58dF1V7hr2RjbcQssj9azb31wVkIJT'; //url de api gif que se dio en google

//ingresar a documentacion ir a giftapi luego abir endpoint y copiar gif url en el navegador  
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apikey}`);

    peticion.then(resp => resp.json() ) //funcion flecah para acceder a los archivos json de la api
    .then(({data}) =>{
        
        const{url}= data.images.original;  //almacenamos en una constante
        
        const img = document.createElement('img');
        img.src = url;  //img creada en memoria
        document.body.append(img); //agreagar img en el html
    })
    .catch(console.warn); 