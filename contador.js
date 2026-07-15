let contador = 0;

const numero = document.getElementById("numero");
const botonMas = document.getElementById("incrementar");
const botonMenos = document.getElementById("disminuir");

botonMas.addEventListener("click", function () {
    contador = contador + 1;
    numero.textContent = contador;
});

botonMenos.addEventListener("click", function () {
    contador = contador - 1;
    numero.textContent = contador;
});