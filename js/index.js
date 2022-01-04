// Funcion para cargar la pagina con productos desde el json
function cargarPagina() { 
    fetch ('BD/productos.json') 
      .then(respuesta => respuesta.json())
      .then(productos =>{       
        for (let plato of productos) {          
          const menu = new Comida(plato);
          menu.mostrar();
        }
      })  
  }
  cargarPagina();