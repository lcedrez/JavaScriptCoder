
let carrito=[]


const tarjeta = document.querySelector('#tarjeta')
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario')
const formulario = document.querySelector('#formulario-tarjeta')
const numeroTarjeta = document.querySelector('#tarjeta .numero')
const nombreTarjeta = document.querySelector('#tarjeta .nombre')
const logoMarca = document.querySelector('#logo-marca')
const  firma = document.querySelector('#tarjeta .firma p')
const  mesExpiracion = document.querySelector('#tarjeta .mes')
const  yearExpiracion = document.querySelector('#tarjeta .year')
const  ccv = document.querySelector('#tarjeta .ccv')
const btonFinalizarCompra =document.querySelector('#btnFinalizarCompra')








const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}



tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});


for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}


const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}


btonFinalizarCompra.addEventListener('click', () => {
	validarFormulario()

});

const validarFormulario=()=>{

   const dir= document.getElementById("direccion").value
   const depto= document.getElementById("Departamento").value
   const ciudBarr= document.getElementById("CiudBarr").value
   const tel= document.getElementById("telFin").value
 
if(dir===""||depto===""|| ciudBarr===""||tel==="")
   {
    toastFormulario()
    
   }
   else 
   {
    alert("Se valido un form	")
   validarFormTarjeta()
   }
   
}

const validarFormTarjeta=()=>{

   
    const inputNum=document.getElementById("inputNumero").value
    const inputNombre=document.getElementById("inputNombre").value
    const inputMes=document.getElementById("selectMes").value
    const inputYear=document.getElementById("selectYear").value

    if(inputNum!=="" &&inputNombre!=="" &&inputMes!==""&&inputYear!=="")
    {
        alert("Pago con exito")
     //AlertaFinCompra()
    }
    
 }
 

toastFormulario=()=>{
  
    Toastify({
        text: "Campos Vacíos!!",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff9800, #ed8900)",
        },
        onClick: function(){} // Callback after click
      }).showToast();


       
}

AlertaFinCompra=()=>{
    Swal.fire({
        html: `
        
        <div class="contenedorAlerta">
      
        <h4 class="card-title">Pago <span class="spanAlertaNombre">Realizado con exito!!</span></h4>
        
        <h5 class="card-title">Recibira la factura en el correo :  <span class="spanAlertaCarrito">luciano.cedrez@gmail.com</span></h5>
        </div>
        <br>
        <br>
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



// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = '../Imagenes/Tarjeta/logos/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = '../Imagenes/Tarjeta/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

	mostrarFrente();
});



// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});


const recuperarCarrito=()=>{
       
    carrito = JSON.parse(localStorage.getItem('claveCarro')) ||  []
    
    

}




const recuperarTotal=()=>{
    
	totalFinal = JSON.parse(localStorage.getItem('TotalFinal')) 
	 
	 document.getElementById('spanTotal').textContent=totalFinal
	 document.getElementById('spanTotal2').textContent=totalFinal
	 let cuotas=Math.round(totalFinal/12)
	 document.getElementById('parrafoCuotas').textContent=cuotas
	 
 }
 
 const ActualizaItems=()=>{


    
    const items = carrito.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
  
    document.getElementById('itemsTotal').textContent=items
    
    

}


localStorage.getItem('claveCarro')!== null && recuperarCarrito() || recuperarTotal() || ActualizaItems()