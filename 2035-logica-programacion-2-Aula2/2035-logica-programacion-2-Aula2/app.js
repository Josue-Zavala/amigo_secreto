let numeroSecreto = generarNumeroSecreto();
let intentos = 5;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarEvnto(){ 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
console.log('numeroDeUsuario');
console.log (typer(numeroDeUsuario));
console.log(typeof(numeroSecreto));
console.log(numeroSecreto);
console.log(numeroSecreto === numeroSecreto);
return;
} 

 function generarNumeroSecreto (){
        let numeroSecreto = Math.floor(Math.random()*10)+1;
        return numeroSecreto;
 }
      