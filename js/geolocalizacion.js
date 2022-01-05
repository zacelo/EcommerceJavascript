'use strict'

const geolocalizacion = ()=>{    
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(permitido,noPermitido)
    }else{
      coordenadas.textContent = 'Sin geolocalización' 
    }
    function permitido (info){
        const lati  = info.coords.latitude;
        const long = info.coords.longitude; 
        coordenadas.textContent ='https://www.google.com/maps?q='+ lati+','+long;  
    }
    function noPermitido (error){  
        coordenadas.textContent = 'Ubicación Denegada' 
  }    

}

