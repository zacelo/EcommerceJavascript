'use strict'

const cargarCarrito     = document.querySelector("#cargarCarrito"),
      verCarrito        = document.querySelector("#mostrarCarrito"),
      btnMostrarCarrito = document.querySelector(".btnMostrarCarrito"),
      total             = document.querySelector("#total")

// Se declara un array y se carga con lo que haya en el localStorage
let agregarCarrito = JSON.parse(localStorage.getItem("lista"));

//En caso de q no haya nada y sea null se crea un array vacio
if(agregarCarrito == null){
  agregarCarrito= []
}
const carro = document.querySelector("#carro");
carro.textContent = agregarCarrito.length;


// cuando se hace click en cargar carrito, se captura el id del producto, y se lo pasa a la funcion agregaracarrito
cargarCarrito.addEventListener('click', ()=> {
    const idDescripcion = document.querySelector("#idDescripcion");  
    agregarACarrito(parseInt(idDescripcion.innerText))
    });



 //Por medio del id , se busca en el arrayMenu, y se instancia un objeto, y el metodo agregarCarrito
 function agregarACarrito(id) {
    fetch('BD/productos.json')
      .then(respuesta => respuesta.json())
      .then(productos=>{
        let item= productos.find((produc) => produc.id === id) 
        item.cantidad = parseInt(cantidadItems.textContent) 
        let plato = new Comida(item);
        plato.agregarCarrito();    
      });  
  }

   //Evento que se dispara al hacer click en el boton de carrito para que se muestre
   btnMostrarCarrito.addEventListener('click', ()=>{
    geolocalizacion()
    observaciones.value=''
    direccion.value= ''
    muestraCarrito()
  })
  function muestraCarrito() {
    verCarrito.innerHTML = "";  
    let suma = 0;
    for (let plato of agregarCarrito) {
      const menu = new Comida(plato);
      suma = suma + menu.precio * menu.cantidad;
      menu.mostrarCarrito();
    }
    total.textContent = "TOTAL $" + suma;    
  }
  // Funcion para eliminar productos del carrito, es llamada mediante un onclick del boton
  function eliminarDelCarrito(id, cantidad) {    
    if(cantidad > 1){
      let item= agregarCarrito.find((produc) => produc.id === id) 
      item.cantidad-=1
      localStorage.setItem('lista',JSON.stringify(agregarCarrito))
      muestraCarrito();
    }else{  
      agregarCarrito = agregarCarrito.filter((agregarCarrito) => agregarCarrito.id != id);
      localStorage.setItem('lista',JSON.stringify(agregarCarrito))
      muestraCarrito();
      carro.textContent = agregarCarrito.length;
    }    
  }