let carrito=[]
let cantidadE=1
let size=0
let cantidad=0


//Declaraciones
//---------------------------------------------------------------------------------------------------
const clickCarrito=document.querySelector('#carritoSearch')

const productoDetalle=document.querySelector('#ContenedorGr')

const productosInteresa=document.querySelector('#contenedorCardsInteresa')

const clickbtnInteresa=document.querySelector('#btnInteres')


const agregarArticuloCarrito= (e) => {
    
    const idSeleccionado = e.target.getAttribute('codigo')
  
    let  catalogo = JSON.parse(localStorage.getItem('catalogo')) ||  []

    
    const artiSeleccionado  =catalogo.find((auxiliar)=> auxiliar.cod_articulo==idSeleccionado)
        
    artiSeleccionado.cantidad=parseInt(cantidadE) 
    artiSeleccionado.size=size 
    if(artiSeleccionado.categoria==="Outfit" && artiSeleccionado.size===0)
    {
        toastTalla()
    }
    else
    {
        if(!ExisteArtenCarro(artiSeleccionado))
        {
           
            carrito.push(artiSeleccionado)
            console.log(artiSeleccionado)
            localStorage.setItem('claveCarro',JSON.stringify(carrito))
            ActualizarTotal(artiSeleccionado)
            ActualizaTotalCarrito(artiSeleccionado)
            ActualizaItems()
            AlertaAgregaCarrito(artiSeleccionado)
          
            
            
        }
        else{
            toastYaExiste()
        }
    }
}   



const agregaBtnDetalle =()=>{
    const articuloBoton=document.querySelectorAll('.btn')
    articuloBoton.forEach((boton)=>{
        
    boton.addEventListener('click',agregarArticuloCarrito)
    })
}





toastTalla=()=>{
    Toastify({

        text: "Debe elegir una Talla!!" ,
        position: "center",   
        duration: 2000,
        style: {
            background: "linear-gradient(to right, #ff9800, #c06500)",
          }
        }).showToast();
}

toastYaExiste=()=>{
    Toastify({

        text: "Ya Agrego este articulo al Carrito!!" ,
        position: "center",   
        duration: 2000,
        style: {
            background: "linear-gradient(to right, #ff9800, #c06500)",
            
          }
        }).showToast();
}

      

AlertaAgregaCarrito=(articuloRecibido)=>{
    Swal.fire({
        html: `
        
        <div class="contenedorAlerta">
      
        <h4 class="card-title">El articulo:<span class="spanAlertaNombre">${articuloRecibido.nombre}</span> fue agregado al carrito</h4>
        
        <h5 class="card-title">Codigo:  <span class="spanAlertaCarrito">${articuloRecibido.cod_articulo}</span></h5>
        </div>
        <div class="btnAlerta">
        
        </div>
           
       
        `,
        showConfirmButton: false,
        height:100,
        width: 700,
        imageWidth: 180,
        imageHeight: 180,
       
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
     
}




 





 function imprimirDetalle(){
   
   const idSeleccionado= localStorage.getItem('idSeleccionado')
    
    let url= "https://demo4551182.mockable.io/catalogo"
     fetch(url)
     .then(response=>response.json())
     .then(data=>mostrarData(data))
     .catch(error=>console.log(error))
     const mostrarData=(data)=>{
        

        Object.keys(data).forEach(key => {
         
            let arrayProductos = data[key]; 
            
           
           
           let artEncontrado = arrayProductos.find(auxiliar => auxiliar.cod_articulo === idSeleccionado);
         
           
           if(artEncontrado.categoria==="Outfit"){

            if(artEncontrado.descuento>0)
            {
                 
               artEncontrado.precio=calcularPorcentaje(artEncontrado.precio,artEncontrado.descuento)
 
            
           
            }
            const artDetalle = document.createElement('div')
         
            artEncontrado.precDescuento=artEncontrado.precio
            
            productoDetalle.innerHTML=""
            artDetalle.className='container'
            artDetalle.innerHTML=`
 
            <div class="row">
                 <div id="bloqueCat" class="col-xs-6">
                     <div class="row">
                         <div id="bloqueImg" class="col-xs-6">
                             <img src="../${artEncontrado.imagen}" alt="">
                         </div>
                            
                         <div id="bloqueDetalle" class="col-xs-6">
                             <div class="row">
                                 <div id="productoNombre" class="hidden-xs col-sm-6">
                                     <div id="productoNombreComponenteId" class="productoNombreComponente">
                                       
                                         <div>${artEncontrado.nombre}</div>
                                         <select id="dropDetalle" class="dropDet" >
                                             <option hidden value="default">Size</option>
                                               <option value="Small">Small</option>
                                               <option value="Medium">Medium</option>
                                               <option value="Large">Large</option>
                                               <option value="X-Large">X-Large</option>
                                               
                                         </select>
 
                                         
                                     </div>
                                     <br>
                                     <select id="dropCant" class="cantCarrDet" precio="${artEncontrado.precio}" codigo="${artEncontrado.cod_articulo}">
                                         <option hidden value="1">1</option>
                                           <option value="1">1</option>
                                           <option value="2">2</option>
                                           <option value="3">3</option>
                                           <option value="4">4</option>
                                           <option value="5">5</option>
                                           <option value="6">6</option>
                                           <option value="7">7</option>
                                           <option value="8">8</option>
                                           <option value="9">9</option>
                                           <option value="10">10 </option>
                                         </select>
                                         <br>
                                         <hr class="lineaH">
                                         <div id="boxColor" >Color: ${artEncontrado.color}</div>
                                         <div id="boxCat" >Categoria: ${artEncontrado.categoria}</div>
                                 </div>
                                
                                 
                             </div>
                             <div class="row">
                                 <div id="productoPrecio" class="hidden-xs col-sm-6">
                                     <div id="productoPrecioComponenteId" class="productoPrecioComponente">
                                         <div id="boxPrecio">U$S ${artEncontrado.precio}</div>
                                         <div id="boxCodigo">codigo: ${artEncontrado.cod_articulo}</div>
                                         <button  codigo="${artEncontrado.cod_articulo}" type="button" class="btn btn-primary"> Agregar al Carrito</button>
                                        
                                     </div>
                                     
                                 </div>
 
                             </div>
                             <div class="row">
                                 <div id="productoDetalle" class="hidden-xs col-sm-6">
                                     <div id="productoDetalleDesc" class="productoDescripcion">
                                         <div>
                                             <hr class="lineaH">
                                             <p class="parrafoDetalle"> ${artEncontrado.descripcion}</p>
                                         </div>
 
                                     </div>
                                 </div>
 
                             </div>
                         </div>
                     </div>
 
                     </div>
                 </div>
 
         </div>
 
 
 
                `
                
                productoDetalle.append(artDetalle)
                insertarInteresa(artEncontrado)
                agregaBtnDetalle()
                agregaBtnsCant()
                agregaBtnsSize()
     
               
           }
           else
           {
           if(artEncontrado.descuento>0)
           {
                
              artEncontrado.precio=calcularPorcentaje(artEncontrado.precio,artEncontrado.descuento)
            }
           
            const artDetalle = document.createElement('div')
            productoDetalle.innerHTML=""
            artDetalle.className='container'
            artDetalle.innerHTML=`
 
            <div class="row">
                 <div id="bloqueCat" class="col-xs-6">
                     <div class="row">
                         <div id="bloqueImg" class="col-xs-6">
                             <img src="../${artEncontrado.imagen}" alt="">
                         </div>
                            
                         <div id="bloqueDetalle" class="col-xs-6">
                             <div class="row">
                                 <div id="productoNombre" class="hidden-xs col-sm-6">
                                     <div id="productoNombreComponenteId" class="productoNombreComponente">
                                       
                                         <div>${artEncontrado.nombre}</div>
                                 
                                     </div>
                                     <br>
                                     <select id="dropCant" class="cantCarrDet">
                                         <option hidden value="1">1</option>
                                           <option value="1">1</option>
                                           <option value="2">2</option>
                                           <option value="3">3</option>
                                           <option value="4">4</option>
                                           <option value="5">5</option>
                                           <option value="6">6</option>
                                           <option value="7">7</option>
                                           <option value="8">8</option>
                                           <option value="9">9</option>
                                           <option value="10">10 </option>
                                         </select>
                                         <br>
                                         <hr class="lineaH">
                                         <div id="boxColor" >Color: ${artEncontrado.color}</div>
                                         <div id="boxCat" >Categoria: ${artEncontrado.categoria}</div>
                                 </div>
                                
                                 
                             </div>
                             <div class="row">
                                 <div id="productoPrecio" class="hidden-xs col-sm-6">
                                     <div id="productoPrecioComponenteId" class="productoPrecioComponente">
                                         <div id="boxPrecio">U$S ${artEncontrado.precio}</div>
                                         <div id="boxCodigo">codigo: ${artEncontrado.cod_articulo}</div>
                                         <button codigo="${artEncontrado.cod_articulo}" type="button" class="btn btn-primary"> Agregar al Carrito</button>
                                         
                                     </div>
                                     
                                 </div>
 
                             </div>
                             <div class="row">
                                 <div id="productoDetalle" class="hidden-xs col-sm-6">
                                     <div id="productoDetalleDesc" class="productoDescripcion">
                                         <div>
                                             <hr class="lineaH">
                                             <p class="parrafoDetalle"> ${artEncontrado.descripcion}</p>
                                         </div>
 
                                     </div>
                                 </div>
 
                             </div>
                         </div>
                     </div>
 
                     </div>
                 </div>
 
         </div>
 
 
 
                `
              
                productoDetalle.append(artDetalle)
                insertarInteresa(artEncontrado)
                agregaBtnDetalle()
                agregaBtnsCant()
     

           }

          
               
           
          });

        
        

     }
    
    
       
}

const agregarListennerImagen =()=>{
    // const idSeleccionado = e.target.getAttribute('cod')
    
     const clickImagen=document.querySelectorAll('.imgDetalleInteresa')
     console.log('llega')
     clickImagen.forEach((img)=>{
         
     img.addEventListener('click',redireccion)
     })
    
 
 
 }



 const btnInteresCatalogo =()=>{
    // const idSeleccionado = e.target.getAttribute('cod')
    
     const clickImagen=document.querySelectorAll('.imgDetalleInteresa')
    
     clickImagen.forEach((img)=>{
         
     img.addEventListener('click',redireccion)
     })
    
 
 
 }




const insertarInteresa=(artRecibido)=>{
   
    let  catalogo = JSON.parse(localStorage.getItem('catalogo')) ||  []
   
    let expresion = new RegExp(`${artRecibido.categoria}.*`, "i");
    let result = catalogo.filter(catalogo => expresion.test(catalogo.categoria) );

   

    renderizaInteresa(result)


}
const listadolimp=document.querySelector('#contenedorCardsInteresa')

const renderizaInteresa=(datos)=>{
    
    let arrayinteres= datos.slice(-5)
    listadolimp.innerHTML=''

   arrayinteres.forEach((producto)=>{
       
            const artDiv = document.createElement('div')
             artDiv.className='card'
             artDiv.innerHTML=`
             <img class="imgDetalleInteresa" style="cursor:pointer" src=../${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}" precioDesc="${producto.precio}" >
             <h4 class="card-titleInteres">${producto.nombre}</h4>
             <p class="card-textInteres">U$s ${producto.precio}</p>
            
         
            </div>
             `
     
             productosInteresa.append(artDiv)
        
            })
            agregarListennerImagen()
            btnInteresCatalogo()
            
           
}

    


const paginaCarrito=()=>{
    
   window.location.href = "../Paginas/carrito.html";
  

}

function redireccion(e){
    const idSeleccionado = e.target.getAttribute('cod')
    localStorage.setItem('idSeleccionado',idSeleccionado)  
    window.location.href = "../Paginas/Articulos.html";

     }

const ExisteArtenCarro=(artrecibido)=>{
    
    const variable = carrito.some((aux)=>aux.cod_articulo==artrecibido.cod_articulo && aux.size===artrecibido.size) 
    return variable

}


clickCarrito.addEventListener('click',paginaCarrito)


const recuperarCarrito=()=>{
       
    carrito = JSON.parse(localStorage.getItem('claveCarro')) ||  []
    
  

}


const agregaBtnsCant =()=>{

    
    const cantEleg=document.querySelectorAll('.cantCarrDet')

   cantEleg.forEach((cant)=>{
      cant.addEventListener('change',cantElegida)
        })
       
       

}

const agregaBtnsSize=()=>{
    const cantSize=document.querySelectorAll('.dropDet')

    cantSize.forEach((size)=>{
       size.addEventListener('change',sizeElegido)
         })
        
}

const cantElegida=()=>{
    const cantidadSeleccionada =document.getElementById('dropCant').value
    
    cantidadE= cantidadSeleccionada
    console.log(cantidadE)

}

const sizeElegido=()=>{
    const sizeSeleccionado =document.getElementById('dropDetalle').value
    
    size= sizeSeleccionado

}

const calcularPorcentaje=(precioRecibido,descuentoRecibido)=>{
    

    let descuento=(descuentoRecibido/100)*precioRecibido	
    
    precioRecibido-=descuento

    return precioRecibido
    
}



const recuperarTotal=()=>{
    
   totalFinal = JSON.parse(localStorage.getItem('TotalFinal')) 
    
    document.getElementById('spanTotal').textContent=totalFinal
}


const ActualizaItems=()=>{

    carrito = JSON.parse(localStorage.getItem('claveCarro')) ||  []

        
            const items = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    
            
            document.getElementById('cantidadItem').textContent=items
        
    
}
    


const ActualizarTotal=(valorRecibido)=>{
   
    let desc=valorRecibido.precio*valorRecibido.descuento/100
    valorRecibido.precio-=desc
    console.log("calculo"+ valorRecibido.precio)
    totalFinal+=valorRecibido.precio*valorRecibido.cantidad
   
    console.log("Final"+totalFinal)
    document.getElementById('spanTotal').textContent=totalFinal 
    localStorage.setItem('TotalFinal',totalFinal)

    document.getElementById('spanTotal').textContent=totalFinal
    
    
    }

    const ActualizaTotalCarrito =(artRecibido)=>{
        
      
        
        
      
        
        let indice = carrito.indexOf(artRecibido)//obtengo Indice
       
       
        let subTot=artRecibido.precio*artRecibido.cantidad
        //le paso al array el nuevo dato de sub total
        
        let precDescuento=(artRecibido.descuento/100)*subTot
        artRecibido.precio-=precDescuento
        carrito[indice].subTotal= artRecibido.precio 
        carrito[indice].cantidad=artRecibido.cantidad 
    
        
        
        //sumo el subtotal del Array para actualizar el Resumen del pedido
        const suma =carrito.map(item => item.subTotal).reduce((prev, curr) => prev + curr, 0);
        
        
        totalFinal=suma
       
        localStorage.setItem('ClaveCarro',carrito)
        
       
        ActualizaItems()
        
    }
       
    
       
      
    
    



imprimirDetalle()



localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() || ActualizaItems()

