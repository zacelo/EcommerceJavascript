'use strict'
const pedido          = document.querySelector('#pedido'),
      observaciones   = document.querySelector('#observaciones'),     
      direccion       = document.querySelector('#direccion');      
     

//Al hacer click en pedido se recorre el array del carrito y se lo formatea para enviar el mensaje por whatsApp
pedido.addEventListener('click',()=>{     
    pedido.href = ''
    let ped = ''
    let sumar = 0
    for(let i of agregarCarrito){
      sumar += i.precio * i.cantidad
      ped += '%0A'+i.cantidad +' - ' +i.nombre     
    }    
    pedido.href = `https://wa.me/59897356576/?text=*PEDIDO DESDE WEB*
                          ${ped}
                          %0A *OBSERVACIONES:*
                          %0A${observaciones.value}
                          %0A*TOTAL ---->* $ ${sumar}
                          %0A%0A*DIRECCIÓN:*
                          %0A${direccion.value}
                          %0A*UBICACION:*
                          %0A${coordenadas.textContent}`
  //se limpia todo el carrito y el LocalStorage      
  localStorage.removeItem('lista');
  carro.textContent = 0;
  agregarCarrito=[]
  mostrarCarrito.innerHTML=""; 
  pedido.classList.add('disabled')
  total.textContent = "TOTAL $"
 //se cierra el modal
  $('#mostraCarrito').modal('hide');
 });