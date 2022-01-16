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
};
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
  };

   //Evento que se dispara al hacer click en el boton de carrito para que se muestre
   btnMostrarCarrito.addEventListener('click', ()=>{

    //se llama a la funcion de geolocalizacion para obtener la autorizacion del usuario a su ubicacion
    geolocalizacion()
    // se limpian los input
    observaciones.value=''
    direccion.value= ''
    // Se llama a lafuncion para mostrar el carrito
    muestraCarrito()
  });

  function muestraCarrito() {
    //si el carrito esta vacio se desabilita el boton de hacer el pedido
    if(agregarCarrito.length == 0){
     pedido.classList.add('disabled')
    }else{
      pedido.classList.remove('disabled')
    }
    verCarrito.innerHTML = "";  
    let suma = 0;
   // se recorre el array con lo que se agrego al carrito
    for (let plato of agregarCarrito) {
      const menu = new Comida(plato);
      suma = suma + menu.precio * menu.cantidad;
      menu.mostrarCarrito();
    };
    total.textContent = "TOTAL $" + suma;    
  };
  // Funcion para eliminar productos del carrito, se le pasa el id y la cantidad y va eliminando de a uno
  function eliminarDelCarrito(id, cantidad) {    
    if(cantidad > 1){
      let item= agregarCarrito.find((produc) => produc.id === id) 
      item.cantidad-=1
      localStorage.setItem('lista',JSON.stringify(agregarCarrito)) ; 
      muestraCarrito();
    }else{  
      agregarCarrito = agregarCarrito.filter((agregarCarrito) => agregarCarrito.id != id);
      localStorage.setItem('lista',JSON.stringify(agregarCarrito))
      muestraCarrito();
      carro.textContent = agregarCarrito.length;
    };
    //Mensaje de alerta mediante la libreria Toastify
    Toastify({
      text: "Producto eliminado",
      duration: 1500,  
      gravity: "center",
      position: "right",     
      style: {
        background: "linear-gradient(to right, #ff4949, #cf0707",
      },   
    }).showToast();   
  };