//creacion del array
let nombres= [];

function agregarAmigo() {
    //captura el valor del input
    let nombreAmigo = document.getElementById('amigo').value;
    //Valida que el input no este vacio
    if (nombreAmigo == ''){
        alert('Debe de ingresar un nombre');
        return false;
    }
    //Agrega el valor al array
    nombres.push(nombreAmigo);

    //limpia el valor de entrada
    document.getElementById('amigo').value = '';
    //ejecuta funcion actualizar amigos
    actualizarAmigos()
}
function actualizarAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';

    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}
function sortearAmigos()
 
