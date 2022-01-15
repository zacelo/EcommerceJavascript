'use strict'

const  cargarProductos   = document.querySelector("#cargarProductos"),      
       cantidadItems     = document.querySelector("#cantidad")

class Comida {
    constructor(plato) {
      this.id = plato.id;
      this.nombre = plato.nombre;
      this.precio = plato.precio;
      this.imagen = plato.imagen;
      this.descripcion = plato.descripcion;
      this.cantidad = plato.cantidad;
      this.categoria = plato.categoria;
    }
    //Metodo para cuando carga la pagina, se muestren los productos
    mostrar() {      
      const rowMostrar = document.createElement("div");
      rowMostrar.classList.add("col-sm-6","col-lg-4","all",this.categoria);         
      rowMostrar.innerHTML = `<div class="box animate__animated animate__zoomIn">
                                   <div >
                                        <div class="img-box ">
                                            <img src="${this.imagen}" alt="" class="producto">
                                        </div>
                                        <div class="detail-box ">
                                            <h5 class="mb-2">${this.nombre} </h5>
                                            
                                            <div class="options mb-2">
                                                <h6 class="mb-2">$ ${this.precio}</h6>                                               
                                            </div>
                                            <button id="boton${this.id}" class="btn btn-warning text-white fw-bold rounded-pill w-100" data-toggle="modal" data-target="#exampleModal"><i class="bi bi-eye-fill me-4 h4 text-dark"></i>Ver Más </button>
                                        </div>
                                    </div>
                                </div>`;
        cargarProductos.appendChild(rowMostrar);
        const verMas = document.getElementById('boton'+this.id)
        verMas.addEventListener('click', ()=>{
        mostrarDescripcion(this.id);
        }) 
    }
    //Metodo para ver mas sobre el producto
  verDescripcion() {
    const rowDescripcion = document.createElement("div");
    rowDescripcion.classList.add("row");
    cargarDescripcion.appendChild(rowDescripcion);
    rowDescripcion.innerHTML = ` <div class="col-7 col-lg-7  ">
                                       <img src="${this.imagen}" class="card-img-top w-100 img-thumbnail " alt="...">
                                  </div>

                                  <div class="col-12 col-lg-5 mt-2 d-flex flex-column justify-content-between">
                                      <div>
                                        <h3 class="card-title mb-4" id="categoria">${this.nombre}</h3>
                                        <p>${this.descripcion}</p> 
                                      </div>                                        
                                          <p class="lead fs-4 "> Precio: <span class=" fw-bold">$${this.precio }</span> </p>                                           
                                          <p id="idDescripcion" hidden class="lead fs-4 ">${this.id}</p>
                                          <p id="cantidadDescripcion" hidden class="lead fs-4 ">${this.cantidad}</p>                                                
                                    </div>
                                   `;
  }

  //Metodo para agregar al carrito
  agregarCarrito() {    
    const existe = agregarCarrito.find((item) => {
    return item.id === this.id;
  });   
  if (existe == undefined) {
    agregarCarrito.push({id: this.id,nombre:this.nombre, categoria: this.categoria, precio: this.precio, imagen: this.imagen, cantidad: this.cantidad});

    Toastify({
      text: "Producto agregado",
      duration: 1500,  
      gravity: "center",
      position: "right",     
      style: {
        background: "linear-gradient(to right, #4ad32f, #037030",
      },   
    }).showToast();

    carro.textContent = agregarCarrito.length;
  } else {
    existe.cantidad += parseInt(cantidadItems.innerText)
  }
  localStorage.setItem('lista',JSON.stringify(agregarCarrito))

  
}
//Metodo para mostrar carrito
mostrarCarrito() {
  const rowCarrito = document.createElement("div");
        rowCarrito.classList.add("row", "mt-2","border-bottom", "p-3");         
        rowCarrito.innerHTML = `         
                                 <div class="col-12 col-lg-3 ">                                      
                                    <img src="${this.imagen}" class="card-img-top w-75 img-thumbnail " alt="...">
                                 </div>
                                 <div class="col-10 col-lg-7 d-flex flex-column justify-content-evenly">   
                                    <h4 class="card-title " id="categoria">${this.cantidad}- ${this.nombre} --- C/u $${this.precio}</h4>                                                                                                                  
                                    <p class="card-text lead fs-5">Subtotal- <span>$${this.precio * this.cantidad}</span></p>                    
                                 </div>
                                 <div class="col-1">
                                    <i class="bi bi-trash rounded-3  text-danger  btn fs-1 "id="${this.id}")></i>                                                         
                                  </div>  
                         `;
  verCarrito.appendChild(rowCarrito);
  const eliminar = document.getElementById(this.id);
  eliminar.addEventListener('click', ()=>{      
  eliminarDelCarrito(this.id,this.cantidad)
  })   
}  
}






