'use strict'
//Funcion permite obtener la ubicacion del usuario, siempre y cuando este lo autorice
const geolocalizacion = ()=>{
    // chequea si el navegador cuenta con geolocalizacion    
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(permitido,noPermitido)
    }else{
      coordenadas.textContent = 'Sin geolocalización' 
    }
    function permitido (info){
      //si el Usuario permite dar su ubicacion se guarda en variables la latitud y longitud
        const lati  = info.coords.latitude;
        const long = info.coords.longitude; 
        // se los coloca dentro de un parrafo que esta oculto dentro del index.html
        coordenadas.textContent ='https://www.google.com/maps?q='+ lati+','+long;  
    }
    function noPermitido (error){ 
       //en caso de que el usuario no permita dar la ubicacion se guarda en el parrafo Ubicacion denegada 
        coordenadas.textContent = 'Ubicación Denegada' 
  }    

}

