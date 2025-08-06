// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let amigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombreAmigo = amigo.value;
    if (nombreAmigo) {
        listaDeAmigos.push(nombreAmigo);
        amigo.value = "";
    }
    mostrarLista();
}

function mostrarLista() {
    listaAmigos.innerHTML = "";
    listaDeAmigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.classList.add("list-item");
        li.textContent = amigo;
        listaAmigos.appendChild(li);

    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (listaDeAmigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSeleccionado = listaDeAmigos[indiceAleatorio];
        resultado.innerHTML = "Amigo seleccionado al azar: " + amigoSeleccionado;
    } else {
        resultado.innerHTML = "No hay amigos en la lista.";
    }
}