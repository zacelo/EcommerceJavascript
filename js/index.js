const filtro = document.querySelectorAll('.filtro'),
      varios = document.getElementById('varios');

// Funcion para cargar la pagina con productos desde el json
function cargarPagina() { 
    fetch ('BD/productos.json') 
      .then(respuesta => respuesta.json())
      .then(productos =>{ 
        // se cargan en una pestaña de varios hasta 6 productos
        // gracias a la biblioteca underscore le pasamos el json y esta lo desordena
        // lo que conseguimos es que cada vez que se refresque la pagina o se oprima el boton de varios
        //se carga con 6 productos distinto, asi no se cargan siempre los mismos 6 productos
        const productosRandom = _.shuffle(productos);              
        for (let i = 0;i<6;i++) {  
          //se instancia cada objeto(roducto) desde el array desordenado aleatoriamente
          const menu = new Comida(productosRandom[i]);
          menu.mostrar();        
        }
      }); 
  }
 cargarPagina()
// cada vez que se oprima el boton varios se va a la funcion cargarPagina
 varios.addEventListener('click', ()=>{
  cargarProductos.innerHTML=""
   cargarPagina()
 });
// bucle para filtrar por categoria de productos  
for (let item of filtro) {
    item.addEventListener('click', (e)=>{
      cargarProductos.innerHTML=""
      fetch ('BD/productos.json') 
      .then(respuesta => respuesta.json())
      .then(productos =>{     
        for (let plato of productos) { 
          // se instancia el objeto pero se filtra por la categoria
          if(plato.categoria == e.target.textContent){         
            const menu = new Comida(plato);
            menu.mostrar();
          }
        }       
      }); 
    });
   }
   
  const menuDesplegable = document.getElementById('navbarSupportedContent'),
              seleccion = document.querySelectorAll('.nav-link'),
              botonMenu = document.getElementById('botonMenu');
 
for (menu of seleccion){
    menu.addEventListener('click', ()=>{
    menuDesplegable.classList.toggle('show')
    botonMenu.setAttribute('aria-expanded','false')
  });
};