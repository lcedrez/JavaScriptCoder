
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
let contador=0  
let cantidad=1
let cantidadMas=1
let precioPorCantidad=0
let carrito=[]
let totales=[]
let catalogo=[]
let articuloDetalle
let datos

  

//Query De Elementos
//-------------------------------------------------------------------------------------------------------
const listadoProductos=document.querySelector('#contenedorCards')
const listadoCarrito=document.querySelector('#contenedorCarro')
const cuotas=document.querySelector('.parrafoCuotas')
const articuloDetallado=document.querySelector('#ContenedorGr')
const subTotal=document.querySelector('#spanTotal')
const cantidades=document.querySelectorAll('#cantidad')
const totalItems=document.querySelector('#cart-items-qty')
const itemsCarrito=document.querySelector('#cantidadItem')
const clickCarrito=document.querySelector('#carritoSearch')



//Barra de Busqueda
//------------------------------------------------------------------------------------------------------
const searchBar=document.querySelector('#searchBar')
const searchButton=document.querySelector('#searchButton')



//Funciones
//---------------------------------------------------------------------------------------------------------

const paginaCarrito=()=>{
    
    window.location.href = "Paginas/carrito.html";
    recuperarCarrito()
    ActualizaItems()
    imprimirCarro()

}

const busquedaArticulos=(e)=>{

    
  let  catalog = JSON.parse(localStorage.getItem('catalogo')) ||  []
    
    const busqueda=searchBar.value
    let expresion = new RegExp(`${busqueda}.*`, "i");
    let result = catalog.filter(catalog => expresion.test(catalog.nombre)||expresion.test(catalog.cod_articulo)||expresion.test(catalog.categoria) );

    
              
     renderizarArtEncontrado(result)
   
  }

    
        
        
    




//Creo funcion para mostrar todos los articulos
const renderizarListProductos=(datos)=>{
   
    
    datos.forEach((producto)=>{
        if(producto.descuento > 0)
        {
       const artDiv = document.createElement('div')
       let precio=producto.precio
        let precDescuento=(producto.descuento/100)*producto.precio

        producto.precio-=precDescuento
        artDiv.className='card-body'
        artDiv.innerHTML=`
        <img class="imgDetalle" src=${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}" precioDesc="${producto.precio}">
            <h4 class="card-title">${producto.nombre}</h4>
            <div class="precioActualizado">
            <p class="card-text3"><del>U$s ${precio}</del></p>
            <p class="card-text2">U$s${producto.precio}</p>
            </div>
            <div class="descuento">
            <p class="card-text2">${producto.descuento}% OFF</p>
            <img class="imgDescuento" src="Imagenes/E-Commerce/Sale.jpg" alt="sale">
            </div>
        
        
      </div>
        `

        listadoProductos.append(artDiv)
    }
    else
    {
        const artDiv = document.createElement('div')
        
        artDiv.className='card-body'
        artDiv.innerHTML=`
        <img class="imgDetalle" src=${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}">
            <h4 class="card-title">${producto.nombre}</h4>
            <p class="card-text2">U$s ${producto.precio}</p>
           
      
        
        
      </div>
        `

        listadoProductos.append(artDiv)

    }
    })
        agregarListennersBtns()
        agregarListennerImagen()
      
}





const renderizarArtEncontrado=(datos)=>{
   
    listadoProductos.innerHTML=""
    datos.forEach((producto)=>{
        if(producto.descuento>0)
        {
            const artDiv = document.createElement('div')
            let precio=producto.precio
             let precDescuento=(producto.descuento/100)*producto.precio
     
             producto.precio-=precDescuento
             artDiv.className='card-body'
             artDiv.innerHTML=`
             <img class="imgDetalle" src=${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}" precioDesc="${producto.precio}">
                 <h4 class="card-title">${producto.nombre}</h4>
                 <div class="precioActualizado">
                 <p class="card-text3"><del>U$s ${precio}</del></p>
                 <p class="card-text2">U$s${producto.precio}</p>
                 </div>
                 <div class="descuento">
                 <p class="card-text2">${producto.descuento}% OFF</p>
                 <img class="imgDescuento" src="Imagenes/E-Commerce/Sale.jpg" alt="sale">
                 </div>
             
             
           </div>
             `
     
             listadoProductos.append(artDiv)
        }
        else
        {
       const artDiv = document.createElement('div') 
        artDiv.className='card-body'
        artDiv.innerHTML=`
        <img class="imgDetalle" src=${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}">
            <h4 class="card-title">${producto.nombre}</h4>
            <p class="card-text2">U$s ${producto.precio}</p>
            <p class="card-text2"></p>
        
        
        
      </div>
        `

        listadoProductos.append(artDiv)
    }
    })
       
    agregarListennersBtns()
    agregarListennerImagen()

       



}



 

const agregarListennerEnter =()=>{
    // const idSeleccionado = e.target.getAttribute('cod')
    
    
 
    
         
     
     searchBar.addEventListener('keypress',busquedaEnter)
    
    
 
 
 }

 const busquedaEnter =(e)=>{
    
    if (e.key ==="Enter") {
        let  catalog = JSON.parse(localStorage.getItem('catalogo')) ||  []
    
        const busqueda=searchBar.value
        let expresion = new RegExp(`${busqueda}.*`, "i");
        let result = catalog.filter(catalog => expresion.test(catalog.nombre)||expresion.test(catalog.cod_articulo)||expresion.test(catalog.categoria) );
    
        
                  
         renderizarArtEncontrado(result)
    
}
 }















//Creo renderizacion Para Fetch ya que son otros aritculos




    const renderizarArticulos= (e) => {
    const idSeleccionado = e.target.getAttribute('codigo')
    let  catalogo = JSON.parse(localStorage.getItem('catalogo')) ||  []

    
    const artiSeleccionado  =catalogo.find((auxiliar)=> auxiliar.cod_articulo==idSeleccionado)
        
        if(!ExisteArtenCarro(artiSeleccionado))
        {
            carrito.push(artiSeleccionado)
            localStorage.setItem('claveCarro',JSON.stringify(carrito))
            ActualizarTotal(artiSeleccionado.precio)
           
            ActualizaItems()
            AlertaAgregaCarrito(artiSeleccionado)
            
            
        }
      
}   



const agregarListennersBtns =()=>{

    const articuloBoton=document.querySelectorAll('.btn')
    articuloBoton.forEach((boton)=>{
        
    boton.addEventListener('click',renderizarArticulos)
    })
   


}

const agregarListennerImagen =()=>{
   // const idSeleccionado = e.target.getAttribute('cod')
   
    const clickImagen=document.querySelectorAll('.imgDetalle')
    clickImagen.forEach((img)=>{
        
    img.addEventListener('click',redireccion)
    })
   


}







//creo funcion para eliminar articulos del carrito
const agregaBtnsEliminarCant =()=>{

    const eliminaBoton=document.querySelectorAll('.imgPapelera')
    const cantEleg=document.querySelectorAll('.cantCarr')
 
    eliminaBoton.forEach((boton)=>{
    boton.addEventListener('click',EliminarDeCarrito)
    })
    cantEleg.forEach((cant)=>{
        cant.addEventListener('change',ActualizaTotalCarrito)
        })
       


}

const ActualizaItems=()=>{


    
    const items = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    
   
    document.getElementById('cantidadItem').textContent=items
    
    
}



const ActualizaTotalCarrito =(e)=>{
    //obtengo los datos del DOM para actualizar Sub Total y carrito

    const precioArt =e.target.getAttribute('precio')
    
    const id=e.target.getAttribute('id')
    const codigo = e.target.getAttribute('codigo')
    const cantidadSeleccionada =parseInt(document.getElementById(id).value)
    
    const artiSeleccionado =carrito.find((auxiliar)=> auxiliar.cod_articulo==codigo)
    let indice = carrito.indexOf(artiSeleccionado)//obtengo Indice
   

    let subTot=precioArt*cantidadSeleccionada
    //le paso al array el nuevo dato de sub total
    
    carrito[indice].subTotal= subTot 
    carrito[indice].cantidad=cantidadSeleccionada 

    
    
    //sumo el subtotal del Array para actualizar el Resumen del pedido
    const suma =carrito.map(item => item.subTotal).reduce((prev, curr) => prev + curr, 0);
    
    document.getElementById('spanTotal').textContent=suma
    
    totalFinal=suma
    
    localStorage.setItem('claveCarro',carrito)
    localStorage.setItem('TotalFinal',totalFinal)
   
    ActualizaItems()
    

   

   
  }


  

  




//creo una funcion para recuperar el carrito del local storage y poder mostrarlo
const recuperarCarrito=()=>{
       
    carrito = JSON.parse(localStorage.getItem('claveCarro')) ||  []
    
   

}

const recuperarTotal=()=>{
    
   totalFinal = JSON.parse(localStorage.getItem('TotalFinal')) 
    
    document.getElementById('spanTotal').textContent=totalFinal
}





//funcion para mostrar el carrito

const imprimirCarro=()=>{

            
            listadoCarrito.innerHTML=""
            carrito.forEach((producto)=>{
            const artDiv = document.createElement('div')
            contador ++
            artDiv.className='contenedorPadre'
            artDiv.innerHTML=` <div class="contenedorPadre">
            <div id="contenedorCarrito" class="contieneTodoElCarrito">
                
                    <div class="contTodoCarro">
                            <div class="conedorDeItems">
                                <div class="itemImagen"> <img src=../${producto.imagen} alt="" class="imgCarrrito"></div>
                                <div class="itemsGral">
                                        <h2 class="item_name">
                                        <a href="">
                                        ${producto.descripcion} </a>
                                        </h2>
                                        <div class="itemDescripcion">
                                            <ul class="itemListado">
                                                <li>
                                                Codigo : <em>${producto.cod_articulo}</em>
                                                </li>
                                                <li>
                                                Categoria : <em>${producto.categoria}</em>
                                                </li>
                                                <li>
                                                Color :
                                                <em>${producto.color}</em>
                                                </li>
                                                </ul>
                                        </div>
                                 


                                        <label for="cant">Cant:</label>
                                        
                                        <select id="${contador}" class="cantCarr" precio="${producto.precio}" codigo="${producto.cod_articulo}">
                                        <option hidden value="default">${producto.cantidad}</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                        </select>
        
                                            <div class="eliminar">
                                                <div class="papeleraBtn" codigo="${producto.cod_articulo}"> <img src="Imagenes/E-Commerce/papelera.png" alt="" class="imgPapelera" codigo="${producto.cod_articulo}"></div>
                                                
                                            </div>
                                        </div>
        
                                            <div class="precio">
                                                <span class="carritoPrecio">
                                                    <span id="precio${contador}" class="precioDolar">
                                                   U$S ${producto.precio}</span>


                                                
                                                </span>
                                            </div>
                                </div>
        
        
                            </div>
        
                            
                    </div>            
            
        </div>  
            `
            
            
            listadoCarrito.append(artDiv)
            localStorage.setItem('claveCarro',JSON.stringify(carrito))
            localStorage.setItem('contador',contador)  
            
           
        
            
            
        })

           
     
        


       
            
        agregaBtnsEliminarCant()
       
       
}




const ExisteArtenCarro=(artrecibido)=>{
    const variable = carrito.some((aux)=>aux.cod_articulo==artrecibido.cod_articulo) 
    return variable
}

const EliminarDeCarrito=(e)=>{
    const idSeleccionado = e.target.getAttribute('codigo')
    
    const artiSeleccionado =carrito.find((auxiliar)=> auxiliar.cod_articulo==idSeleccionado)
    let indice = carrito.indexOf(artiSeleccionado)//obtengo Indice
    carrito.splice(indice,1)
    localStorage.setItem('claveCarro', JSON.stringify(carrito)) 
    //actualizo cantidad de Items
    ActualizaItems()
   
    imprimirCarro()


}



const ActualizarTotal=(valorRecibido)=>{
totalFinal+=parseInt(valorRecibido) 
document.getElementById('spanTotal').textContent=totalFinal 
localStorage.setItem('TotalFinal',totalFinal)  


}


//esto creo que tengo que eliminarlo
const ActualizarTotalMas=(precio,cantidadRecibida)=>{
    let totalAmostrar
    let totRecibido
    totalAmostrar=document.getElementById('spanTotal')
    
    totRecibido=precio*cantidadRecibida     
    console.log(totRecibido,cantidadRecibida    )
    totalAmostrar =+totRecibido
    console.log(totalAmostrar)
    totalAmostrar = -precio
    document.getElementById('spanTotal').textContent=totalAmostrar
    console.log(totalAmostrar)
    }




AlertaAgregaCarrito=(articuloRecibido)=>{
    Swal.fire({
        html: `
        
        <div class="contenedorAlerta">
        
        <h4 class="card-title">El articulo:<span class="spanAlertaNombre">${articuloRecibido.nombre}</span> fue agregado al carrito</h4>
        
        <h5 class="card-title">Codigo:  <span class="spanAlertaCarrito">${articuloRecibido.cod_articulo}</span></h5>
        </div>
        <br>
        <br>
        <div class="btnAlerta">
        <button  type="button" class="btn btn-primary" href="#"> SEGUIR COMPRANDO</button>
        <button  type="button" class="btn btn-primary"> IR AL CARRITO</button>
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





function redireccion(e){
    const idSeleccionado = e.target.getAttribute('cod')
    localStorage.setItem('idSeleccionado',idSeleccionado)  

    window.location.href = "Paginas/Articulos.html";

     }

  
   
       





  
  



//EventListeners    
//---------------------------------------------------------------------------------------------------------
searchButton.addEventListener('click',busquedaArticulos)
clickCarrito.addEventListener('click',paginaCarrito)


//Ejecuciones   
//---------------------------------------------------------------------------------------------------------



const cargarCatalogo = async ()=>{
    try{
   const respuesta=await fetch("https://demo4551182.mockable.io/catalogo")
   
   if(respuesta.status=== 200){
    const datos =await respuesta.json();

    //convierto mi objerto en un array
    Object.keys(datos).forEach(key => {
         
        let nuevoArray = datos[key]; 

       console.log(nuevoArray)
        
       localStorage.setItem('catalogo', JSON.stringify(nuevoArray));
        
        renderizarListProductos(nuevoArray)

       
      
       
       
      });


   
   }
 
    }
    catch(error)
    {
        console.log(error)
    }
}

cargarCatalogo()



const todosMisArticulos = async ()=>{
    try{
   const respuesta=await fetch("https://demo4551182.mockable.io/catalogo")
   
   if(respuesta.status=== 200){
    const datos =await respuesta.json();

    //convierto mi objerto en un array
    Object.keys(datos).forEach(key => {
         
        let nuevoArray = datos[key]; 
        
         catalogo=nuevoArray

       
      
       
       
      });


   
   }
 
    }
    catch(error)
    {
        console.log(error)
    }
}








agregarListennerEnter()


localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() || ActualizaItems()
        

  


