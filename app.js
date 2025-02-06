//creacion del array
let nombres = [];

function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (nombreAmigo == ''){
        alert('Debe de ingresar un nombre');
        return;
    }
    if (nombres.includes(nombreAmigo)) {
        alert('El nombre ya fue ingresado');
        return;
    }
    
    nombres.push(nombreAmigo);

    
    document.getElementById('amigo').value = '';
    actualizarAmigos();
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
function sortearAmigo() {
    if (nombres.length <= 1) {
        alert('Ingresa como minimo el nombre de dos amigos para poder iniciar con el sorteo');
        return;
    }
    let amigoSorteado = nombres[Math.floor(Math.random()* nombres.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}

function reiniciarSorteo(){
    nombres = [];
    actualizarAmigos();

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';
}

 
