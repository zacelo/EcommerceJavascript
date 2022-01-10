const filtro = document.querySelectorAll('.filtro'),
      varios = document.getElementById('varios')

console.log(varios)


// Funcion para cargar la pagina con productos desde el json
function cargarPagina() { 
    fetch ('BD/productos.json') 
      .then(respuesta => respuesta.json())
      .then(productos =>{ 
        const productosRandom = _.shuffle(productos); 
             
        for (let i = 0;i<6;i++) {  
          
          const menu = new Comida(productosRandom[i]);
          menu.mostrar();        
        } 
      })  
  }
 cargarPagina()

 varios.addEventListener('click', ()=>{
  cargarProductos.innerHTML=""
   cargarPagina()
 })
  
  for (let item of filtro) {
    item.addEventListener('click', (e)=>{
      cargarProductos.innerHTML=""
      fetch ('BD/productos.json') 
      .then(respuesta => respuesta.json())
      .then(productos =>{     
        for (let plato of productos) { 
          
          if(plato.categoria == e.target.textContent){         
            const menu = new Comida(plato);
            menu.mostrar();
          }
        }    
        
      })  
    })
   }