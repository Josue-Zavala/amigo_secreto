let numeroSecreto = generarNumeroSecreto();
asignarTextoElemento('h1','Juego del número secreto!');
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (intentos);

    if (numeroDeUsuario === numeroSecreto) {
       asignarTextoElemento('p' , `acertaste el número en ${intentos} ${(intentos === 1) ?'vez': 'veces'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
       if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ('p' , 'El numero secreto es menor');
    
       }else{
        asignarTextoElemento ('p' , 'El numero secreto es mayor');

        }
        intentos++;
    limpiarCaja();
    } 
     

    return;
}

function limpiarCaja(){
    let valorCaja= document.querySelector ('#valorUsuario').value='';
   
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}
function condicionesInicales(){
    
asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);

}
function reiniciarjuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de números
   condicionesInicales();
    //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
   //iniciar el numero de intentos
   intentos =1;
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}

condicionesInicales();