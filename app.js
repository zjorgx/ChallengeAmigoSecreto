//creacion del array
let amigos = [];

function agregarAmigo() {
    //captura el valor del input
    let nombreAmigo = document.getElementById('amigo').value;
    //Valida que el input no este vacio
    if (nombreAmigo == ''){
        alert('Debe de ingresar un nombre');
        return false;
    }
    //Agrega el valor al array
    amigos.push(nombreAmigo);

    //limpia el valor de entrada
    document.getElementById('amigo').value = '';

    //muestra los valores del array
    let listaAmigos = document.getElementById('listaAmigos');
}
