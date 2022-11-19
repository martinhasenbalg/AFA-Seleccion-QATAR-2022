// Selectores para cada elemento de filtro o dato a mostrar
const player = document.querySelector('#player');
const camiseta = document.querySelector('#camiseta');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const posicion = document.querySelector('#posicion');
const club = document.querySelector('#club');
const partidos = document.querySelector('#partidos');
const goles = document.querySelector('#goles');
const foto = document.querySelector('#foto');



// Datos para la busqueda
const datosBusqueda = {
    player : '',
    camiseta: '',
    minimo : '',
    maximo: '',
    posicion: '',
    club:'',
    partidos:'',
    goles: '',
    foto: '',
}

// Mostramos Todos los jugadores

document.addEventListener('DOMContentLoaded', () => {
    mostrarJugadores(jugadores);
});

// E.l. para el formulario y funciones para filtrar los jugadores

player.addEventListener('input', e => {
    datosBusqueda.player = e.target.value;
        filtrarJugadores();
});

camiseta.addEventListener('input', e => {
    datosBusqueda.camiseta = Number(e.target.value);
        filtrarJugadores();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
        filtrarJugadores();
});

maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
        filtrarJugadores();
});

posicion.addEventListener('input', e => {
    datosBusqueda.posicion = e.target.value;
        filtrarJugadores();
});

club.addEventListener('input', e => {
    datosBusqueda.club = e.target.value;
        filtrarJugadores();
});

partidos.addEventListener('input', e => {
    datosBusqueda.partidos = Number(e.target.value);
        filtrarJugadores();
});

goles.addEventListener('input', e => {
    datosBusqueda.goles = Number(e.target.value);
        filtrarJugadores();
});


function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarJugadores(jugadores){
    limpiarHTML();

    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // Creamos el contenido html de los datos filtrados
    jugadores.forEach(jugador => {
        const jugadorHTML = document.createElement('div');
        jugadorHTML.innerHTML = `
            
        <div>
            <img src="${jugador.foto}" alt="jugador"/>
            <p> 
            <strong>- Nombre:</strong> ${jugador.player} <br>
            <strong>- Camiseta nro:</strong> ${jugador.camiseta} <br>
            <strong>- Posición:</strong> ${jugador.posicion} <br>
            <strong>- Partidos con la Selección:</strong> ${jugador.partidos} <br>
            <strong>- Club:</strong> ${jugador.club} <br>
            <strong>- Goles:</strong> ${jugador.goles} <br>
            <strong>-  Valuacion de mercado:</strong> <br> ${jugador.valuacion} millones de euros </p>
            
        </div>
        `;
        contenedor.appendChild(jugadorHTML);
    })
}

/* <h5><strong>${jugador.player}</strong></h5> */

// funcion para cuando no haya resultados
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('Sin Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

// Filtros de datos
function filtrarJugadores() {
   const resultado = jugadores.filter(filtrarPlayer).filter(filtrarCamiseta).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPosicion).filter(filtrarClub).filter(filtrarPartidos).filter(filtrarGoles);

   if(resultado.length){
        mostrarJugadores(resultado);
   } else {
       noResultado();
   }
}


// Aplica los filtros
function filtrarPlayer(jugador) {
    if(datosBusqueda.player){
        return jugador.player === datosBusqueda.player;
    } 
    return jugador;
}

function filtrarCamiseta(jugador) {
    if(datosBusqueda.camiseta){
        return jugador.camiseta === datosBusqueda.camiseta;
    }
    return jugador;
}

function filtrarMinimo(jugador) {
    if(datosBusqueda.minimo){
        return jugador.valuacion >= datosBusqueda.minimo;
    }
    return jugador;
}
function filtrarMaximo(jugador) {
    if(datosBusqueda.maximo){
        return jugador.valuacion <= datosBusqueda.maximo;
    }
    return jugador;
}
function filtrarPosicion(jugador) {
    if(datosBusqueda.posicion){
        return jugador.posicion === datosBusqueda.posicion;
    }
    return jugador;
}

function filtrarClub(jugador) {
    if(datosBusqueda.club){
        return jugador.club === datosBusqueda.club;
    }
    return jugador;
}
function filtrarPartidos(jugador) {
    if(datosBusqueda.partidos){
        return jugador.partidos === datosBusqueda.partidos;
    }
    return jugador;
}
function filtrarGoles(jugador) {
    if(datosBusqueda.goles){
        return jugador.goles === datosBusqueda.goles;
    }
    return jugador;
}



//////////BOTON PARA SUBIR///////////

let botonTop = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonTop.style.display = "block";
  } else {
    botonTop.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* BOTON OCULTAR FORM */

const ocultarForm = document.getElementById('formOcultar');

ocultarForm.addEventListener('click', ()=>{
    const capContenedor = document.querySelector('.contenedor');
    if(capContenedor.style.display === 'block'){
        capContenedor.style.display = 'none'
    } else {
        capContenedor.style.display = 'block'
    }
})