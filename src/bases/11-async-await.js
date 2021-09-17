//funciones async - await

//  const getimagepromise = ()=> new Promise(resolve =>resolve('https://loquesearutaurl'))

//  getimagepromise().then(console.log);

//funtion con async

const getImagePromise = async () =>{

    try{
        const apikey = 'ki58dF1V7hr2RjbcQssj9azb31wVkIJT';
        const respuesta= await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apikey}`);
        const {data} = await respuesta.json();
    
        const {url} = data.images.original;  //gif

        const img =  document.createElement('img'); 
        img.src = url;
        document.body.append(img); //poner gif en html

    }catch(error){
        //poner en caso de que se ejecute un error
        console.error(error);
    }


    
}



getImagePromise();


