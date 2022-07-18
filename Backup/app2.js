
//Declaraciones
//---------------------------------------------------------------------------------------------------


let totalFinal=0
const artVentas=[articulo1,articulo2,articulo3,articulo4]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
let carrito=[]




//Query De Elementos
//-------------------------------------------------------------------------------------------------------

const listadoArticulos=document.querySelector('.container')
const cardContainer=document.getElementById('dataId');

  console.log(cardContainer)



//Funciones
//---------------------------------------------------------------------------------------------------------
const renderizarListaArticulos=()=>{
    artVentas.forEach((arti)=>{
        const artContenedor=document.createElement('div')
        artContenedor.className='card-body'
        artContenedor.innerHTML=`
                    <div class="card-body">
                    
                        <h4 class="card-title">${arti.descripcion}</h4>
                                            <img src=${arti.imagen} alt="${arti.descripcion}">
                                            <p class="card-text">$${arti.precio}</p>
                                            
                                            
                                            <p class="card-text"></p>
                                            <button codigo="${arti.cod_articulo}" type="button" class="btn btn-primary"> Agregar al Carrito</button>
                    </div>  
                
        `
                    //Una vez insertado esto debemos agregarlo a la constante creada
                    listadoArticulos.append(artContenedor)
    })
}


 const agregarProducto = (e) => {
        // Al acceder a target accedemos al nodo (etiqueta button) y con getAttribute accedemos al atributo donde nosotros guardamos el valor de referencia (conviene siempre que sea un id unico)
        const productoElegido = e.target.getAttribute('codigo')
      


        // Una vez que tenemos el valor de referencia que guardamos en el boton (en este ejemplo la marca del monitor) hacemos una busqueda (find) en el array original de productos (el mismo que usamos para mostrarlos) y este nos va a devolver todo el objeto que coincida con la busqueda (buscar por el mismo dato que enviamos a data-id)
        const producto = artVentas.find((producto) => producto.cod_articulo == productoElegido)
        // Una vez tenemos todo el objeto, lo enviamos al carrito y ya tenemos nuestro primer producto seleccionado!
        carrito.push(producto)
        imprimirCarrito()
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }

    
    const botonesCompra = document.querySelectorAll('.btn btn-primary')
    botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
    })
    
    
    

    const imprimirCarrito=()=>{
        carrito.forEach((artic)=>{
            const artContenedor=document.createElement('div')
            artContenedor.className='card-body'
            artContenedor.innerHTML=`
            <div id="cardCarrito" class="card-body">
                
               
                        <img src=${artic.imagen} alt="The Beatles">
                            <br>
                            <br>
                            <br>
                            <h3 id="tituloCard" class="card-title">${artic.descripcion}</h5>
                                <h5 id="tituloCard" class="card-title">${artic.cod_articulo}</h5>
                                    <h5 id="tituloCard" class="card-title">${artic.prec}</h5>
            </div>         
            `
                        //Una vez insertado esto debemos agregarlo a la constante creada
                        listadoArticulos.append(artContenedor)
        })
    }
    
    




//EventListeners    
//---------------------------------------------------------------------------------------------------------




//Ejecuciones   
//---------------------------------------------------------------------------------------------------------
renderizarListaArticulos()





    
   