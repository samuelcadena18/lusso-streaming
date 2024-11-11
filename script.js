// Agregar evento de clic a los botones de "Comprar"
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        alert("¡Gracias por tu compra!");
    });
});
function comprar(plan, precio) {
    const telefono = "3025124225";
    const mensaje = `Hola, me gustaría comprar el plan ${plan} con un precio de $${precio} por mes.`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
