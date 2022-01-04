'use strict'

const cargarDescripcion = document.querySelector("#cargarDescripcion")
//Con el id , se lo busca a ver si existe y se intancia un objeto, para luego llamar al metodo verDescripcion para mostrarlo
function mostrarDescripcion(id) {
    cantidadItems.innerText = 1
    cargarDescripcion.innerHTML = "";   
      fetch ('BD/productos.json')
        .then(respuesta => respuesta.json())
        .then(productos=>{
          let plato = new Comida(productos.find((produc) => produc.id === id));
          plato.verDescripcion()
        })   
   }