
let contador=0 
let carrito=[]

const listadoProductos=document.querySelector('#contenedorCards')
const clickCarrito=document.querySelector('#carritoSearch')


const renderizarListProductos=()=>{
    let  catalog = JSON.parse(localStorage.getItem('catalogo')) ||  []
    
    catalog.forEach((producto)=>{
        if(producto.categoria==="Home" && producto.descuento >0){
        
            const artDiv = document.createElement('div')
            let precio=producto.precio
             let precDescuento=(producto.descuento/100)*producto.precio
     
             producto.precio-=precDescuento
             artDiv.className='card-body'
             artDiv.innerHTML=`
             <img class="imgDetalle" src=../${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}" precioDesc="${producto.precio}">
                 <h4 class="card-title">${producto.nombre}</h4>
                 <div class="precioActualizado">
                 <p class="card-text3"><del>U$s ${precio}</del></p>
                 <p class="card-text2">U$s${producto.precio}</p>
                 </div>
                 <div class="descuento">
                 <p class="card-text2">${producto.descuento}% OFF</p>
                 <img class="imgDescuento" src="../Imagenes/E-Commerce/Sale.jpg" alt="sale">
                 </div>
             
             
           </div>
             `

        listadoProductos.append(artDiv)
        
      
    }
    else if(producto.categoria==="Home")
    {
        const artDiv = document.createElement('div')
        
        artDiv.className='card-body'
        artDiv.innerHTML=`
        <img class="imgDetalle" src=../${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}">
            <h4 class="card-title">${producto.nombre}</h4>
            <p class="card-text2">U$s ${producto.precio}</p>
           
      
        
        
      </div>
        `

        listadoProductos.append(artDiv)

    }
    })
        
        agregarListennerImagen()
    
}


const agregarListennerImagen =()=>{
    // const idSeleccionado = e.target.getAttribute('cod')
    
     const clickImagen=document.querySelectorAll('.imgDetalle')
     clickImagen.forEach((img)=>{
         
     img.addEventListener('click',redireccion)
     })
    
 
 
 }

 const paginaCarrito=()=>{
    
    window.location.href = "../Paginas/carrito.html";
   
 
 }

 function redireccion(e){
    const idSeleccionado = e.target.getAttribute('cod')
    localStorage.setItem('idSeleccionado',idSeleccionado)  

    window.location.href = "../Paginas/Articulos.html";

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
        


    //Evente Listeners

    clickCarrito.addEventListener('click',paginaCarrito)


 renderizarListProductos()

 localStorage.getItem('claveCarro')!== null &&  recuperarTotal() || ActualizaItems()