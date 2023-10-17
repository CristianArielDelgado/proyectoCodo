let productos = []

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data
        cargarProductos(productos);
})

const contenedorProductos = document.querySelector("#contenedor-productos");

/*  Esta funcion rellena todos los productos en el html */
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML="";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <h2 class="producto-titulo">${producto.descripcion}</h2>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}