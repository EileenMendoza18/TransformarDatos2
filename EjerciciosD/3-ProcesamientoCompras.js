export function procesarCompra() {
    const cliente = { nombre: "María López", correo: "maria@correo.com" };
    const productos = [
        { nombre: "Curso JavaScript", precio: 40 },
        { nombre: "Curso HTML",       precio: 35 },
        { nombre: "Curso CSS",        precio: 30 }
    ];

    try {
        if (!cliente?.nombre || !cliente?.correo) {
            throw new Error("El cliente debe tener nombre y correo");
        }

        if (!Array.isArray(productos) || productos.length === 0) {
            throw new Error("La lista de productos no es válida o está vacía");
        }

        const productosInvalidos = productos.some(p => !p?.nombre || p?.precio == null);
        if (productosInvalidos) {
            throw new Error("Cada producto debe tener nombre y precio");
        }

        const clienteCompleto = { ...cliente };
        const [primerProducto, ...otrosProductos] = productos;
        const precioTotal = productos.reduce((total, p) => total + p.precio, 0);

        const informe = {
            cliente: clienteCompleto,
            primerProductoAdquirido: primerProducto,
            otrosProductos,
            totalProductos: productos.length,
            precioTotal
        };

        console.log(informe);
        return informe;

    } catch (error) {
        console.log(`Error al procesar compra: ${error.message}`);
        return null;
    }
}