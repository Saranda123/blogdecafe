//querySelector
const heading = document.querySelector('.header__texto h2');
// heading.textContent = 'Nuevo Heading desde JavaScript';
// heading.classList.add('nueva-clase');
// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
// enlaces[0].textContent = 'Nuevo enlace desde JavaScript';
// enlaces[0].classList.add('nueva-clase-enlace');
// enlaces[0].classList.remove('navegacion__enlace');
// getElementById
const heading2 = document.getElementById('heading');
// heading2.textContent = 'Nuevo Heading desde JavaScript con getElementById';
// heading2.classList.remove('header__texto');
// heading2.classList.add('header__texto--nuevo');

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')
//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
// agregar texto
nuevoEnlace.textContent = 'Nuevo Enlace';
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregar al DOM
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//Eventos
// console.log(1);
// window.addEventListener('load', function(){//load espera a que todo el contenido de la página se haya cargado
//     console.log(2);
// })
// window.onload = function(){//load espera a que todo el contenido de la página se haya cargado
//     console.log(3);
// }
// document.addEventListener('DOMContentLoaded',function(){
//     console.log(4);
// })
// console.log(5);

// window.onscroll = function(){
//     console.log('scrolling...');
// }

//Seleccionar elementos y asignarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     //validar formulario
//     console.log('Enviando formulario...');
// })

//Eventos de los inputs y textarea
const datos={
    nombre: '',
    email: '',
    mensaje: ''
}
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInput.addEventListener('input',leerTexto);
emailInput.addEventListener('input',leerTexto);
mensajeInput.addEventListener('input',leerTexto);
//Eventos Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar formulario

    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }
    //enviar formulario
    mostrarAlerta('Enviando formulario...');
})

function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // console.log(datos);
}
//muestra error en pantalla
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
        //Eliminar error después de 3 segundos
    setTimeout(function(){
        alerta.remove();
    }, 3000);
}
