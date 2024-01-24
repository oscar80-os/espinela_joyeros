const nombresProductos = [
    'Box Engasse',
    'English Horse',
    'Knock Nap',
    'La Night',
    'Silver All',
    'Skin Glam',
    'Midimix',
    'Sir Blue',
    'Middlesteel',
    'Anillo de boda',
    // Agrega más nombres según sea necesario
];

function buscarProducto() {
    const inputBusqueda = document.getElementById('inputBusqueda');
    const tituloProductoBuscado = inputBusqueda.value.trim();

    if (tituloProductoBuscado === '') {
        alert('Por favor, ingresa un término de búsqueda.');
        return;
    }

    const productos = Array.from(document.querySelectorAll('.contenedor-items .item'));

    const productoEncontrado = nombresProductos.find(nombre => nombre.toLowerCase().includes(tituloProductoBuscado.toLowerCase()));

    if (productoEncontrado) {
        const productoElemento = productos.find(producto => producto.querySelector('.titulo-item').innerText.toLowerCase() === productoEncontrado.toLowerCase());

        if (productoElemento) {
            productoElemento.scrollIntoView({ behavior: 'smooth' });
            productoElemento.style.border = '2px solid red';
            productoElemento.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
            return;
        }
    }

    alert(`Producto "${tituloProductoBuscado}" no encontrado en la página.`);
}