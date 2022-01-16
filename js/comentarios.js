'use strict'

const formComentario = document.getElementById('formComentario');
const testimonios    = document.querySelector('.testimonios') ;
const borrarComentarios         = document.querySelector('.borrarComentarios')
// array con comentarios predefinidos
const arrayComentarios =()=>{
  let comentarios =[{nombre:"Juan Perez"        ,comentario:"Impresionante, me encanto la milanesa napolitana, con papas fritas naturales, muy bueno sigan asi"                     , estrellas:"5" ,fecha:"3/1/2022"},
                    {nombre:"Monica Alonso"     ,comentario:"Muy buenas pizzas, por lo menos la que pedi yo, lo unico demoraron un poquito"                                          , estrellas:"4" ,fecha:"27/12/2021"},
                    {nombre:"Alejandro"         ,comentario:"La comida muy buena , pero se demoro bastante"                                                                          , estrellas:"3" ,fecha:"4/12/2021"},
                    {nombre:"Guillermina Ortiz" ,comentario:"Me gustaron mucho las hamburguesas , en especial la mexicana con esas papas rusticas excelente, vamos a seguir provando", estrellas:"5" ,fecha:"24/11/2021"},
                    {nombre:"Marcelo Pintos"    ,comentario:"El chivito paro dos muy bueno y abundante, comimos  personas y sobro quedamos pi pon pi pon jajaj"                      , estrellas:"3" ,fecha:"21/10/2021"},
                    {nombre:"Victoria Diaz"     ,comentario:"Muy rico todo 100% recomendable"                                                                                        , estrellas:"5" ,fecha:"12/9/2021"}];

  return comentarios                  
};
 
// en caso de haber comentarios en el localstorage, se los asigna a la variable comentariosLocalStorage
let comentariosLocalStorage = JSON.parse(localStorage.getItem("comentario"));
   
// funcion para cargar los comentarios             
function cargaTestimonios(){
    let comentarios = ""
    if (comentariosLocalStorage != null) {
      comentarios = comentariosLocalStorage.concat(arrayComentarios());  
    }else{
      comentarios = arrayComentarios()
    };            
    for(let i = 0;i < 6 ; i++){
        let puntos = comentarios[i].estrellas       
        let estrella = "";
        for(let i = 1;i<= parseInt(puntos);i++){
            estrella += " <i class='bi bi-star-fill text-warning'></i>"
        };        
        const divTestimonio = document.createElement("div");
        divTestimonio.classList.add("col-12","col-md-6");             
        divTestimonio.innerHTML = `<div class="item">
                                        <div class="box">
                                            <div class="detail-box ">                                                
                                                <h6>${comentarios[i].nombre}</h6>          
                                                ${estrella}<br>
                                                <img src="imagenes/logo1.png" class="mt-2"><br><br>                                                                              
                                                <p class="">${comentarios[i].comentario} </p> 
                                                <p class="text-warning pb-4">${comentarios[i].fecha}</p>                                                                                    
                                            </div>                                        
                                        </div>
                                    </div>` 
      testimonios.appendChild(divTestimonio); 
    };  
};
cargaTestimonios();

formComentario.addEventListener('submit', (e)=>{
    e.preventDefault() 
    let comentarios =  arrayComentarios()    
    let datosForm = new FormData(e.target); 
    let comentarioNuevo = JSON.parse(localStorage.getItem("comentario"));  
    const fecha = new Date();  

    if(comentarioNuevo == null){
        comentarioNuevo= [{nombre:datosForm.get('nombre'),comentario:datosForm.get('comentario'),estrellas:datosForm.get('estrellas'),fecha:fecha.toLocaleDateString()}]
        comentarios = comentarioNuevo.concat(comentarios);        
        localStorage.setItem('comentario',JSON.stringify(comentarioNuevo))
        comentariosLocalStorage = JSON.parse(localStorage.getItem("comentario"));     
    } else{          
        let comentario = [{nombre:datosForm.get('nombre'),comentario:datosForm.get('comentario'),estrellas:datosForm.get('estrellas'),fecha:fecha.toLocaleDateString()}]
       
        comentarioNuevo= comentario.concat(comentarioNuevo)
        console.log(comentarioNuevo)
        comentarios = comentarioNuevo.concat(comentarios);       
        localStorage.setItem('comentario',JSON.stringify(comentarioNuevo));
        comentariosLocalStorage = JSON.parse(localStorage.getItem("comentario"));
    } ;     
    testimonios.innerHTML="";
    Toastify({
        text: "Comentario agregado",
        duration: 1500,  
        gravity: "center",
        position: "right",     
        style: {
          background: "linear-gradient(to right, #4ad32f, #037030",
        },   
      }).showToast();
    cargaTestimonios();
    formComentario.reset();
  });  
  
  borrarComentarios.addEventListener('click', ()=>{
    localStorage.removeItem('comentario');
    window.location.reload();
  })
