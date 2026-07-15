let contador = 0;

const numero = document.getElementById("numero");
const botonMas = document.getElementById("incrementar");
const botonMenos = document.getElementById("disminuir");

botonMas.addEventListener("click", function () {
    contador = contador + 1;
    numero.textContent = contador;

    if (contador === 10) {
        numero.style.color = "yellow";
    }
    else {
    numero.style.color = "black"; 
    }
});

botonMenos.addEventListener("click", function () {
    contador = contador - 1;
    numero.textContent = contador;
});