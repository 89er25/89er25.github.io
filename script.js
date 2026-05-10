const boton = document.querySelector("button");
const mensaje = document.getElementById("mensaje");

mensaje.style.display = "none";

boton.addEventListener("click", () => {

    if(mensaje.style.display === "none"){

        mensaje.style.display = "block";
        boton.textContent = "Cerrar mensaje 💌";

    }else{

        mensaje.style.display = "none";
        boton.textContent = "Abrir mensaje 💌";

    }

});

const fotos = document.querySelectorAll(".carrusel img");

let index = 0;

setInterval(() => {

    fotos[index].classList.remove("active");

    index++;

    if(index >= fotos.length){
        index = 0;
    }

    fotos[index].classList.add("active");

}, 4000);

/* CONTADOR DIAS */

const contador = document.getElementById("contador");

/*
CAMBIA ESTA FECHA
AQUI PONES TU FECHA DE NACIMIENTO
año, mes-1, dia
*/

const fechaInicio = new Date(2012, 7, 12);

function actualizarContador(){

    const hoy = new Date();

    const diferencia = hoy - fechaInicio;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    contador.innerHTML =
    `Gracias por ${dias.toLocaleString()} días siendo la mejor mamá `;

}

actualizarContador();