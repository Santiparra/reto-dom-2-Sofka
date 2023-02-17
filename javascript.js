/* const iniciar =  */
const selectorTemas = document.querySelectorAll(".tema");
const frutas = document.querySelector("#frutas");

const cambiarTema = (evento) => {
    const arregloFrutas = Array.from(frutas.children);
    arregloFrutas.forEach(fruta => fruta.removeAttribute('style'));
    for (let i = 0; i < arregloFrutas.length; i++) {
        if (i % 2 == 0 && evento.target.id == "tema1") {
            arregloFrutas[i].setAttribute('style', 'color: gray; background: black;')
        } else if (i % 2 != 0 && evento.target.id == "tema2"){
            arregloFrutas[i].setAttribute('style', 'color: gray; background: black;')
        }
    }
}

selectorTemas.forEach(boton => 
    boton.addEventListener("click", cambiarTema));
