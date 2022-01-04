const subirCantidad     = document.querySelector("#subir"),
      bajarCantidad     = document.querySelector("#bajar")

// Eventos para subir y bajar la cantidad de productos
subirCantidad.addEventListener('click', ()=>{    
    cantidadItems.innerText = parseInt(cantidadItems.innerText)  + 1 
  })
  
bajarCantidad.addEventListener('click', ()=>{
    if (parseInt(cantidadItems.innerText) > 1){
      cantidadItems.innerText = parseInt(cantidadItems.innerText)  - 1 
    }
  });