const boton = document.querySelector("button");

const mensaje = document.getElementById("mensaje");

const musica = document.getElementById("musica");

mensaje.style.display = "none";

/* BOTON MENSAJE */

boton.addEventListener("click", () => {

    if(mensaje.style.display === "none"){

        mensaje.style.display = "block";

        boton.textContent = "Cerrar mensaje 💌";

        musica.play();

    }else{

        mensaje.style.display = "none";

        boton.textContent = "Abrir mensaje 💌";

        musica.pause();

        musica.currentTime = 0;
    }

});

/* CONTADOR DIAS */

const contador = document.getElementById("contador");

/*
CAMBIA ESTA FECHA
año, mes-1, dia
*/

const fechaInicio = new Date(2008, 0, 1);

function actualizarContador(){

    const hoy = new Date();

    const diferencia = hoy - fechaInicio;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    contador.innerHTML =
    `Gracias por ${dias.toLocaleString()} días siendo la mejor mamá ❤️`;

}

actualizarContador();
