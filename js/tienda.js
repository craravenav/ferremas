document.getElementById("btnAgregarProducto").addEventListener("click", AgregarCarro);

function AgregarCarro() {
    contador = 0;
    contador= parseInt(document.getElementById("carrito-contador").innerText);
    contador = contador + 1;
    document.getElementById("carrito-contador").innerHTML = contador;
    document.getElementById("carrito-contador").classList.remove("visually-hidden");
}