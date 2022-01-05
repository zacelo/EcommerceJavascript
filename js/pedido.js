'use strict'
const pedido          = document.querySelector('#pedido'),
      observaciones   = document.querySelector('#observaciones'),     
      direccion       = document.querySelector('#direccion'),      
      coordenadas     = document.getElementById('coordenadas')

      
pedido.addEventListener('click',()=>{     
    pedido.href = ''
    let ped = ''
    let sumar = 0
    for(let i of agregarCarrito){
      sumar += i.precio * i.cantidad
      ped += '%0A'+i.cantidad +' - ' +i.categoria
     
    }
    
    pedido.href = `https://wa.me/59894762076/?text=*PEDIDO DESDE WEB*
                          ${ped}
                          %0A *OBSERVACIONES:*
                          %0A${observaciones.value}
                          %0A*TOTAL ---->* $ ${sumar}
                          %0A%0A*DIRECCIÓN:*
                          %0A${direccion.value}
                          %0A*UBICACION:*
                          %0A${coordenadas.textContent}`
   
 })