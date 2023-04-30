const carrito = [];

function actualizarCarrito() {
    const carritoTable = document.getElementById("componentes-carrito");
    carritoTable.innerHTML = "";
    for (let i = 0; i < carrito.length; i++) {
        const producto = carrito[i];
        const row = `
        <tr>
            <td>${producto.tituloH},</td>
            <td>${producto.precioP}</td>
        </tr>
        `;
        carritoTable.innerHTML += row;
    }
}

function aggCarrito(id) {
    const tituloH = document.getElementById("titulo" + id).innerText;
    const precioP = document.getElementById("price" + id).innerText;

    carrito.push({
        tituloH,
        precioP        
    });

    actualizarCarrito();
}
