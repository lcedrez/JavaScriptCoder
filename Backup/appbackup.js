

class Articulo{
    constructor(cod_articulo,descripcion,precio,descuento,imagen){
        this.cod_articulo=cod_articulo;
        this.descripcion=descripcion;
        this.precio=precio;
        this.descuento=descuento;
        this.imagen=imagen
    }
}

class Usuario{
    constructor(nombre,apellido,user,password){
    this.nombre=nombre;
    this.apellido=apellido;
    this.user=user;
    this.password=password;    
    }

}


const articulo1= new Articulo("1144","Let It Be Special Edition – Standard LP",2500,0,"Imagenes/E-Commerce/LetitbeCD.jpg")
const articulo2= new Articulo("2244","Let It Be Embroidered Blue Crewneck",4200,0,"Imagenes/E-Commerce/LetitBeCanguro.jfif")
const articulo3= new Articulo("3344","Let It Be Photo Red Crewneck",5200,0,"Imagenes/E-Commerce/LetItbeCanguroRojojfif.jfif")
const articulo4= new Articulo("4444","Launchera - The Beatles",8250,0,"Imagenes/E-Commerce/Launchera.jfif")
const articulo5=new Articulo("5544","Beatles Playing Cards - Special Edition",1250,0,"Imagenes/E-Commerce/BeatlesCard.jpg")
const articulo6=new Articulo("6644","Abbey Road Ukulele",17500,0,"Imagenes/E-Commerce/UkuleleAbbey.jfif")
const articulo7=new Articulo("7744","Yellow Submarine Port Hole Beanie",1500,0,"Imagenes/E-Commerce/gorroYsub.jfif")
const articulo8=new Articulo("8844","I Love The Beatles Pin",200,0,"Imagenes/E-Commerce/PIN.jfif")


const usuario1=new Usuario("Luciano","Cedrez","lcedrez","Luciano1234")
const usuario2=new Usuario("Juan","Perez","jperez","Juan1234567")
const usuario3=new Usuario("Carlos","Gonzalez","cgonzalez","Carlos2487")
const usuario4=new Usuario("Luis","Martinez","lmartinez","Luis4545")



let totalFinal=0
const artVentas=[articulo1,articulo2,articulo3,articulo4,articulo5,articulo6,articulo7,articulo8]
const usuSistema=[usuario1,usuario2,usuario3,usuario4]
const carrito=[]





    
    //Primero tenemos que capturar la card y guardarla en una variable
    const contenedorCard=document.querySelector('#contenedorCard');

    const cardContainer=document.getElementById('contenedorCard');

    artVentas.forEach((producto)=>{
        //creamos el elemento
        const card=document.createElement('div')
        card.className='card-body'
        //asignarle algo a la card
        card.innerHTML=`
        <h4 class="card-title">${producto.descripcion}</h4>
        <img src=${producto.imagen} alt="${producto.descripcion}">
        <p class="card-text">$${producto.precio}</p>
        
       
        <p class="card-text"></p>
        <button codigo="${producto.cod_articulo}" type="button" class="btn btn-primary"> Agregar al Carrito</button>
        
        
      </div>`

        //Tercer paso
        cardContainer.append(card)
    } );

   
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

    const botonesCompra = document.querySelectorAll('.btn')
    botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
    console.log(botonesCompra)
    })
    

    

const imprimirCarrito = () => {
    cardContainer.innerHTML = ''
    carrito.forEach((producto)=>{
        const cartRow=document.createElement('div')
        cartRow.className='card'
       
        cartRow.innerHTML=`
        <blockquote class="blockquote mb-0">
        <img src=${producto.imagen} alt="">
        <h5>${producto.descripcion}</h5>
        <h5>Precio : ${producto.precio} </h5>
        <div id="contbasura">
              <img id="basura" src="Imagenes/E-Commerce/basura.png"  alt="">
              <button id="btn" codigo="${producto.cod_articulo}"  class="btn btn-primary"> Eliminar</button>
              </div>
      </blockquote>`

        cardContainer.append(cartRow)
    })
} 




const vaciarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        localStorage.removeItem('carrito')
    }
  
    carrito = [];
    imprimirCarrito()
}





function ValidarRegistro(nombre,apellido,usuario,password,password2)
{
   

    if(nombre === '' || apellido === ''||usuario===''||password==='')
    {
        alert("Uno de los campos está vacío");
        
       return false;
    }
    else if((usuSistema.some((variable)=>variable.user== usuario)==true) )
    {
        alert("Este Usuario ya existe!!");
        return false;
        
    }
    else if(password.length<=6)
    {
        alert("La Clave debe tener mas de 6 caracteres!");
        return false;

    }
    else if(password!=password2)
    {
        alert("Las Claves no coinciden!!");
        return false;
    }
    else if( tieneMinusculas(password)==0)
    {
        alert("Debe Tener al menos una minuscula!")
        return false;
    }
    else if(tieneMayusculas(password)==0)
    {
        alert("Debe Tener al menos una mayúscula!")
        return false;
    }
    else
    {
        const usuariosis=new Usuario(nombre,apellido,usuario,password)
        usuSistema.push(usuariosis)
        console.log(usuSistema)
        return true;
    }

}


function tieneMinusculas(texto){
    let letras="abcdefghyjklmnñopqrstuvwxyz";
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }

 function tieneMayusculas(texto){

    let letrasMayus="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

    for(i=0; i<texto.length; i++){
       if (letrasMayus.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }




function ValidarIngreso(usuarioIngresado,passIngresado)
{
    if(usuarioIngresado === '' || passIngresado === '')
    {
        alert("Uno de los campos está vacío");
       return false;
    }
     else 
    {
        const resultado = usuSistema.find(auxiliar => auxiliar.user==usuarioIngresado)
        if(resultado==undefined)
        {
            alert("Usuario No existe!!")
            return false
        }
        else if(resultado.user==usuarioIngresado && resultado.password===passIngresado )
        {
         return true
        }
        else
        {
        return false
        }
        
       
    }
       


}


function validar(cantidad)
{
    if(cantidad === '')
    {
        alert("El campo esta vacío");
       return false;
    }
    else if(isNaN(cantidad))
       {
        
        {
            alert("Debe Ingresar un Número")

            return false
        }
    }
    else if(cantidad==0)
    {
        alert("La cantidad debe ser mayor a 0")
        
        return false
    }
    else
    {
        return true
    }
}

function recogerdatosRegistro(){

    let nomIngresado=document.getElementById("nombre").value;
    let apeIngresado=document.getElementById("apellido").value;
    let usuIngresado=document.getElementById("usuario").value;
    let passIngresado=document.getElementById("password").value;
    let passIngresado2=document.getElementById("password2").value;
    usuIngresado=usuIngresado.toLowerCase();
    
if(ValidarRegistro(nomIngresado,apeIngresado,usuIngresado,passIngresado,passIngresado2)==false)
{
alert("Ingrese los datos Nuevamente")
}
else
{
    const bienVenida=`Bienvenido ${nomIngresado} ${apeIngresado} tu usuario para poder loguearte a la tienda es : ${usuIngresado} Clave : ${passIngresado}`
    alert("Gracias por Registrarse")
    alert(bienVenida)
     nomIngresado=document.getElementById("nombre").value="";
     apeIngresado=document.getElementById("apellido").value="";
     usuIngresado=document.getElementById("usuario").value="";
     passIngresado=document.getElementById("password").value="";
     passIngresado2=document.getElementById("password2").value="";
}

    

}










function recogerDatos(){
    let usuIngresado=document.getElementById("IngresoUser").value;
    let IngresoPass=document.getElementById("IngresoPass").value;
    

    

    

if( ValidarIngreso(usuIngresado,IngresoPass)==false)
  {
    alert("Usuario o Clave Incorrecta!!")
   
  }
  else
  {
  
    window.location.href = "Paginas/Tienda.html";
  

    }
  
  
  
  
  
    
}





/*
alert("Bienvenido a la Tienda THE BEATLES")
alert("A continuación un listado de nuestros Articulos")

alert("Codigo: " +articulo1.cod_articulo+"\n" +"Descricpion: "+ articulo1.descripcion+"\n"+"Precio: "+"$"+articulo1.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo2.cod_articulo+"\n" +"Descricpion: "+ articulo2.descripcion+"\n"+"Precio: "+"$"+articulo2.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo3.cod_articulo+"\n" +"Descricpion: "+ articulo3.descripcion+"\n"+"Precio: "+"$"+articulo3.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo4.cod_articulo+"\n" +"Descricpion: "+ articulo4.descripcion+"\n"+"Precio: "+"$"+articulo4.precio+"\n"+"------------------------------------"+"\n")



while (confirm("Desea comprar algun Articulo?"))
    {
    true;
        
        codIngresado=prompt("Ingrese Codigo del Articulo:")
    
        
    while(validar(codIngresado)==false)
    {
        codIngresado=prompt("Ingrese Codigo del Articulo:")
    }

    
    let resultado = artVentas.find(auxiliar => auxiliar.cod_articulo==codIngresado);
    if(resultado != null)
    {
        
            
            alert("El Articulo elegido es"+ " " +resultado.descripcion + "\n" + "Su precio es :$"+resultado.precio+"\n"+"\n"+"---------------------------------------")
            confirm("Desea Agregar este Articulo al carrito?")
            {

                cantIngresada=prompt("Ingrese Cantidad:")
                while(validar(cantIngresada)==false)
                {
                    
                    cantIngresada=prompt("Ingrese Cantidad:")
                }
                let total= resultado.precio *cantIngresada

                alert("El precio total de la compra es : $"+total)
                totalFinal +=total
                
            }
    }    
    else
    {
        alert("ESTE ARTICULO NO EXISTE!!")
    }    

    }
    
    alert("El Total a pagar es de $ " + " "+ totalFinal )

}


*/


/*
while(confirm("Desea Loguearse al Sistema de Tienda??"))
{
usuarioIngresado=prompt("Ingrese Usuario : ")
while( ValidarUsuario(usuarioIngresado)==false)
{
    
    usuarioIngresado=prompt("Ingrese Usuario : ")
}


if(usuSistema.some((variable)=>variable.user== usuarioIngresado)==true)
{

    clave=prompt("Ingrese Clave : ")
    while( ValidarClave(clave,usuarioIngresado)==false)
    {
        
        clave=prompt("Ingrese Clave : ")
    }

    

   
    
        
        alert("Bienvenido a la Tienda THE BEATLES")
        alert("A continuación un listado de nuestros Articulos")

        alert("Codigo: " +articulo1.cod_articulo+"\n" +"Descricpion: "+ articulo1.descripcion+"\n"+"Precio: "+"$"+articulo1.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo2.cod_articulo+"\n" +"Descricpion: "+ articulo2.descripcion+"\n"+"Precio: "+"$"+articulo2.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo3.cod_articulo+"\n" +"Descricpion: "+ articulo3.descripcion+"\n"+"Precio: "+"$"+articulo3.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo4.cod_articulo+"\n" +"Descricpion: "+ articulo4.descripcion+"\n"+"Precio: "+"$"+articulo4.precio+"\n"+"------------------------------------"+"\n")



        while (confirm("Desea comprar algun Articulo?"))
            {
            true;
                
                codIngresado=prompt("Ingrese Codigo del Articulo:")
            
                
            while(validar(codIngresado)==false)
            {
                codIngresado=prompt("Ingrese Codigo del Articulo:")
            }

            
            let resultado = artVentas.find(auxiliar => auxiliar.cod_articulo==codIngresado);
            if(resultado != null)
            {
                
                    
                    alert("El Articulo elegido es"+ " " +resultado.descripcion + "\n" + "Su precio es :$"+resultado.precio+"\n"+"\n"+"---------------------------------------")
                    confirm("Desea Agregar este Articulo al carrito?")
                    {

                        cantIngresada=prompt("Ingrese Cantidad:")
                        while(validar(cantIngresada)==false)
                        {
                            
                            cantIngresada=prompt("Ingrese Cantidad:")
                        }
                        let total= resultado.precio *cantIngresada

                        alert("El precio total de la compra es : $"+total)
                        totalFinal +=total
                        
                    }
            }    
            else
            {
                alert("ESTE ARTICULO NO EXISTE!!")
            }    

            }
            
            alert("El Total a pagar es de $ " + " "+ totalFinal )
            

            }
            else
            {
                alert("No existe Usuario!!")
            }

        
      
        
}
 






/*
alert("Bienvendios a la Tienda THE BEATLES")
alert("A continuación un listado de nuestros Articulos"+"\n"+"Hoy todo con un 25% de Descuento!!!")

alert("Codigo: " +articulo1.cod_articulo+"\n" +"Descricpion: "+ articulo1.descripcion+"\n"+"Precio: "+"$"+articulo1.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo2.cod_articulo+"\n" +"Descricpion: "+ articulo2.descripcion+"\n"+"Precio: "+"$"+articulo2.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo3.cod_articulo+"\n" +"Descricpion: "+ articulo3.descripcion+"\n"+"Precio: "+"$"+articulo3.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo4.cod_articulo+"\n" +"Descricpion: "+ articulo4.descripcion+"\n"+"Precio: "+"$"+articulo4.precio+"\n"+"------------------------------------"+"\n")



while (confirm("Desea comprar algun Articulo?"))
    {
     true;
        
        codIngresado=prompt("Ingrese Codigo del Articulo:")
       
        
       while( Validar(codIngresado)==false)
       {
        codIngresado=prompt("Ingrese Codigo del Articulo:")
       }

     
      
       if(artVentas.some((art)=>art.cod_articulo==codIngresado)==true)
       {
           
            const resultado = artVentas.find(auxiliar => auxiliar.cod_articulo==codIngresado);
            alert("El Articulo elegido es"+ " " +resultado.descripcion + "\n" + "Su precio es :$"+resultado.precio+"\n"+"\n"+"---------------------------------------")
            confirm("Desea Agregar este Articulo al carrito?")
            {

                cantIngresada=prompt("Ingrese Cantidad:")
                while(validarCantidades(cantIngresada)==false)
                {
                    
                    cantIngresada=prompt("Ingrese Cantidad:")
                }
                let total= resultado.precio *cantIngresada

                alert("El precio total de la compra es : $"+total)
                 totalFinal +=total
                
            }
       }    
       else
       {
           alert("ESTE ARTICULO NO EXISTE!!")
       }    

    }
       
    alert("El Total a pagar es de $ " + " "+ totalFinal )
       
       /*
        if(codIngresado=="1144")
        {
           alert("El Articulo elegido es"+ " " +articulo1.descripcion + "\n" + "Su precio es :$"+articulo1.precio+"\n"+"si compra más de "+" "+articulo1.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo1.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo1.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo1.precio,cantidadIngresada,articulo1.descuento)
                var resultadoFinal= CalculoDescuentos(articulo1.precio,articulo1.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
           {
                preciofinal=cantidadIngresada*articulo1.precio
                
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }

        }
        */
    








/*Segundo Entregable 


function Articulo(cod_articulo,descripcion,precio,descuento,cantPdesc){

    this.cod_articulo=cod_articulo;
    this.descripcion=descripcion;
    this.precio=precio;
    this.descuento=descuento;
    this.cantPdesc=cantPdesc;
  
    
}



function CalculoDescuentos(precio,descuento,cantidad)
{
    var calculo
    var resultado

    calculo=descuento* precio*cantidad/100 
    resultado=precio * cantidad -calculo
    return resultado
}

function CalculoaDescontar(precio,cantidad,descuento)
{
    var descaplicado
   descaplicado= descuento * precio*cantidad/100

   return descaplicado
}

function Validar(variable)
{
    if(variable === ''){
        alert("El campo esta vacío");
       return false;
       }
       else
       {
        if(isNaN(variable))
        {
            alert("Debe Ingresar un Número")

            return false
        }
        else
        {
            return true
        }

       }
}





function validarCantidades(cantidad)
{
    if(cantidad === '')
    {
        alert("El campo esta vacío");
       return false;
    }
    else if(isNaN(cantidad))
       {
        
        {
            alert("Debe Ingresar un Número")

            return false
        }
    }
    else if(cantidad==0)
    {
        alert("La cantidad debe ser mayor a 0")
        
        return false
    }
    else
    {
        return true
    }
    

    

}



const articulo1= new Articulo("1144","Amoxidal",1200,10,2)
const articulo2= new Articulo("2244","Crema Anti Age",2500,5,2)
const articulo3= new Articulo("3344","Ibuprofeno",900,15,5)
const articulo4= new Articulo("4444","Aspirina",500,10,3)
const articulo5= new Articulo("5544","Bisolvon",2800,20,4)


var codIngresado=0
var cantidadIngresada=0
var preciofinal=0
let TotalAcumulado =[]



alert("Bienvenido a FarmaShop, a continuación el listado de nuestros articulos")


alert("Codigo: " +articulo1.cod_articulo+"\n" +"Descricpion: "+ articulo1.descripcion+"\n"+"Precio: "+"$"+articulo1.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo2.cod_articulo+"\n" +"Descricpion: "+ articulo2.descripcion+"\n"+"Precio: "+"$"+articulo2.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo3.cod_articulo+"\n" +"Descricpion: "+ articulo3.descripcion+"\n"+"Precio: "+"$"+articulo3.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo4.cod_articulo+"\n" +"Descricpion: "+ articulo4.descripcion+"\n"+"Precio: "+"$"+articulo4.precio+"\n"+"------------------------------------"+"\n"+"Codigo: " +articulo5.cod_articulo+"\n" +"Descricpion: "+ articulo5.descripcion+"\n"+"Precio: "+"$"+articulo5.precio+"\n"+"------------------------------------")
console.table(articulo1)
console.table(articulo2)
console.table(articulo3)
console.table(articulo4)
console.table(articulo5)







while (confirm("Desea comprar algun Articulo?"))
    {
     true;
        
        codIngresado=prompt("Ingrese Codigo del Articulo:")
       while( Validar(codIngresado)==false)
       {
        codIngresado=prompt("Ingrese Codigo del Articulo:")
       }
        if(codIngresado=="1144")
        {
           alert("El Articulo elegido es"+ " " +articulo1.descripcion + "\n" + "Su precio es :$"+articulo1.precio+"\n"+"si compra más de "+" "+articulo1.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo1.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo1.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo1.precio,cantidadIngresada,articulo1.descuento)
                var resultadoFinal= CalculoDescuentos(articulo1.precio,articulo1.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
           {
                preciofinal=cantidadIngresada*articulo1.precio
                
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }



          
   
        }
        else if(codIngresado=="2244")
        {
           alert("El Articulo elegido es"+ " " +articulo2.descripcion + "\n" + "Su precio es :$"+articulo2.precio+"\n"+"si compra más de "+" "+articulo2.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo2.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo2.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo2.precio,cantidadIngresada,articulo2.descuento)
                var resultadoFinal= CalculoDescuentos(articulo2.precio,articulo2.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
           {
                preciofinal=cantidadIngresada*articulo2.precio
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }
 
   
        }
        else if(codIngresado=="3344")
        {
           alert("El Articulo elegido es"+ " " +articulo3.descripcion + "\n" + "Su precio es :$"+articulo3.precio+"\n"+"si compra más de "+" "+articulo3.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo3.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo3.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo3.precio,cantidadIngresada,articulo3.descuento)
                var resultadoFinal= CalculoDescuentos(articulo3.precio,articulo3.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
           {
                preciofinal=cantidadIngresada*articulo3.precio
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }
 
   
        }
        else if(codIngresado=="4444")
        {
           alert("El Articulo elegido es"+ " " +articulo4.descripcion + "\n" + "Su precio es :$"+articulo4.precio+"\n"+"si compra más de "+" "+articulo4.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo2.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo4.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo4.precio,cantidadIngresada,articulo4.descuento)
                var resultadoFinal= CalculoDescuentos(articulo4.precio,articulo4.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
                
            }
           else
           {
                preciofinal=cantidadIngresada*articulo4.precio
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }
 
   
        }

        else if(codIngresado=="5544")
        {
           alert("El Articulo elegido es"+ " " +articulo5.descripcion + "\n" + "Su precio es :$"+articulo5.precio+"\n"+"si compra más de "+" "+articulo5.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo5.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           while(validarCantidades(cantidadIngresada)==false)
           {
            cantidadIngresada=prompt("Cantidad")
           }

           if(cantidadIngresada >articulo2.cantPdesc )
           {
                var descuentoAplicado=CalculoaDescontar(articulo5.precio,cantidadIngresada,articulo5.descuento)
                var resultadoFinal= CalculoDescuentos(articulo5.precio,articulo5.descuento,cantidadIngresada)
                
                alert("Se le aplicara un descuento de $"+" " + descuentoAplicado )
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                TotalAcumulado.push(resultadoFinal)
            }
           else
            {
                preciofinal=cantidadIngresada*articulo5.precio
                alert("El precio Final de la compra es de $" + " " + preciofinal)
                TotalAcumulado.push(preciofinal)
           
            }
 
   
        }
        else{
            alert("El Articulo No Existe!!")
            
            }



    }



        let suma=0;
        for(let i=0;i<TotalAcumulado.length;i++){
            suma+=TotalAcumulado[i];
        }
    

    alert("El Total a pagar es de $ " + " "+ suma )









/*Primer Entregable
var numero=0
var contador =0
var intentos=5

alert('Adivina el numero del 1 al 10 en 5 intentos')
while(numero!=3)
{
    
    numero=prompt("Ingrese Número:")
    if(isNaN(numero))
    {
        alert("Debe Ingresar un Numero no se permiten Textos")
    }
   else if(numero <=0 || numero > 10)
    {
        alert("Debe Ingresar un Número entre 1 y 10")
       
    }
    else{

    if(numero==3)
    {
        alert("Felicitaciones adivinaste el numero!!")
    }
    else
    {
        
            contador++
            cantidad=5-contador
            
            alert("Fallaste te quedan" +' '+ cantidad + ' '+  'Intentos')

    }
    if(contador==5)
    {
        alert("Lo siento has perdido el Juego!!")
    }
    
}
       
    

   
}

   */




   

