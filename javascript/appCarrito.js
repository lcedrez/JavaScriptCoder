
let contador=0 
let carrito=[]

const listadoCarrito=document.querySelector('#contenedorCarro')
const btnFinalizaCompra=document.querySelector('#btnFinalizaCompra')
//Declaraciones
//---------------------------------------------------------------------------------------------------


const imprimirCarro=()=>{

         console.log(carrito)   
    listadoCarrito.innerHTML=""
    carrito.forEach((producto)=>{

        if(producto.categoria==="Outfit")
        {
         
            let precDescuento=(producto.descuento/100)*producto.precio		
         
            console.log(precDescuento)
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

                                                ${producto.descripcion} </a>
                                                </h2>
                                                <div class="itemDescripcion">
                                                    <ul class="itemListado">
                                                        <li>
                                                        <em class="textDescr">Codigo : ${producto.cod_articulo}</em>
                                                        </li>
                                                        <li>
                                                        <em class="textDescr">Categoria : ${producto.categoria}</em>
                                                        </li>
                                                        <li>
                                                        
                                                        <em class="textDescr">Color : ${producto.color}</em>
                                                        </li>
                                                        <li>
                                                        
                                                        <em class="textDescr">Size : ${producto.size}</em>
                                                        </li>
                                                        </ul>
                                                </div>
                                        

                                                <div class="itemDetalle">
                                                    <label for="cant">Cant:</label>
                                                    
                                                    <select id="${contador}" class="cantCarr" precio="${producto.precio}" codigo="${producto.cod_articulo}">
                                                        <option hidden value="default">${producto.cantidad}</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>

                                                        <div class="eliminar">
                                                            <div class="papeleraBtn" codigo="${producto.cod_articulo}"> <img src="../Imagenes/E-Commerce/papelera.png" alt="Eliminar" class="imgPapelera" codigo="${producto.cod_articulo}"></div>
                                                        
                                                        </div>
                                                </div>

                                                    <div class="precio">
                                                        <span class="carritoPrecio">
                                                            <span id="precio${contador}" class="precioDolar">
                                                        U$S ${producto.precio- precDescuento}</span>
                                                        </span>
                                                    </div>
                                                    <br>
                                                    <br>
                                        </div>


                                    </div>

                                    
                            </div>            
                    
                </div>  
                    `
                    
                    
                    listadoCarrito.append(artDiv)
                    localStorage.setItem('claveCarro',JSON.stringify(carrito))
                    localStorage.setItem('contador',contador)  
                   
        }
        else
        {

           
                 
              // producto.precio=calcularPorcentaje(producto.precio,producto.descuento)
                
            
           
              
              let precDescuento=(producto.descuento/100)*producto.precio		
               
         

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

                                                ${producto.descripcion} </a>
                                                </h2>
                                                <div class="itemDescripcion">
                                                    <ul class="itemListado">
                                                        <li>
                                                        <em class="textDescr">Codigo : ${producto.cod_articulo}</em>
                                                        </li>
                                                        <li>
                                                        <em class="textDescr">Categoria : ${producto.categoria}</em>
                                                        </li>
                                                        <li>
                                                        
                                                        <em class="textDescr">Color : ${producto.color}</em>
                                                        </li>
                                                        </ul>
                                                </div>
                                        

                                                <div class="itemDetalle">
                                                    <label for="cant">Cant:</label>
                                                    
                                                    <select id="${contador}" class="cantCarr" precio="${producto.precio}" codigo="${producto.cod_articulo}">
                                                        <option hidden value="default">${producto.cantidad}</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>

                                                        <div class="eliminar">
                                                            <div class="papeleraBtn" codigo="${producto.cod_articulo}"> <img src="../Imagenes/E-Commerce/papelera.png" alt="Eliminar" class="imgPapelera" codigo="${producto.cod_articulo}"></div>
                                                        
                                                        </div>
                                                </div>

                                                    <div class="precio">
                                                        <span class="carritoPrecio">
                                                            <span id="precio${contador}" class="precioDolar">
                                                        U$S ${producto.precio-precDescuento}</span>
                                                        </span>
                                                    </div>
                                                    <br>
                                                    <br>
                                        </div>


                                    </div>

                                    
                            </div>            
                    
                </div>  
                    `
                    
                    
                    listadoCarrito.append(artDiv)
                    localStorage.setItem('claveCarro',JSON.stringify(carrito))
                    localStorage.setItem('contador',contador)  
    
}

    
    
})

   





    
agregaBtnsEliminarCant()
agregaBtnFinalizaCompra()

}

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


const agregaBtnFinalizaCompra =()=>{

 
    
    btnFinalizaCompra.addEventListener('click',finalizar)

}

const EliminarDeCarrito=(e)=>{
    const idSeleccionado = e.target.getAttribute('codigo')
    
    const artiSeleccionado =carrito.find((auxiliar)=> auxiliar.cod_articulo==idSeleccionado)
    let indice = carrito.indexOf(artiSeleccionado)//obtengo Indice
    carrito.splice(indice,1)
    localStorage.setItem('claveCarro', JSON.stringify(carrito)) 
    const suma =carrito.map(item => item.subTotal).reduce((prev, curr) => prev + curr, 0);
    let cuotas=Math.round(suma/12)
    
    document.getElementById('parrafoCuotas').textContent=cuotas
    
    document.getElementById('spanTotal').textContent=suma
    document.getElementById('spanTotal2').textContent=suma
    localStorage.setItem('TotalFinal',suma)  
    //actualizo cantidad de Items
    ActualizaItems()
    imprimirCarro()


}

const calcularPorcentaje=(precioRecibido,descuentoRecibido)=>{
    

    let descuento=(descuentoRecibido/100)*precioRecibido	
    
    precioRecibido-=descuento

    return precioRecibido
    
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
    let cuotas=Math.round(suma/12)
    document.getElementById('spanTotal').textContent=suma
    document.getElementById('spanTotal2').textContent=suma
    document.getElementById('parrafoCuotas').textContent=cuotas
    
    totalFinal=suma
    
    localStorage.setItem('ClaveCarro',carrito)
    localStorage.setItem('TotalFinal',totalFinal)

   
    ActualizaItems()
    

   

   
  }

  const ActualizaItems=()=>{


    
    const items = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
  
    document.getElementById('cart-items-qty').textContent=items
    document.getElementById('cantidadItem').textContent=items
    
    

}



const recuperarCarrito=()=>{
       
    carrito = JSON.parse(localStorage.getItem('claveCarro')) ||  []
    imprimirCarro()
    

}

const recuperarTotal=()=>{
    
   totalFinal = JSON.parse(localStorage.getItem('TotalFinal')) 
    
    document.getElementById('spanTotal').textContent=totalFinal
    document.getElementById('spanTotal2').textContent=totalFinal
    let cuotas=Math.round(totalFinal/12)
    document.getElementById('parrafoCuotas').textContent=cuotas
}



function finalizar(){
   
   

    window.location.href = "../Paginas/FinalizarCompra.html";

     }






localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() || ActualizaItems()