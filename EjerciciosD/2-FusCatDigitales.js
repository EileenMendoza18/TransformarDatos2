export const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];

export const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 }
];

export function fusionarCatalogos(a, b) {
    try {
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Ambos parámetros deben ser arreglos");
        }

        const catalogoOrdenado = Object.freeze(
            [...a, ...b]
                .slice()
                .sort((x, y) => x.precio - y.precio)
                .map(item => Object.freeze({ ...item }))
        );

        console.log(catalogoOrdenado);
        return catalogoOrdenado;

    } catch (error) {
        console.log(`Error al fusionar catálogos: ${error.message}`);
        return null;
    }
}