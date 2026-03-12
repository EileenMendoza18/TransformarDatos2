export function crearEstudiante(nombre, ...notas) {
    try {
        if (!nombre) {
            throw new Error("¡Ojo! El nombre es obligatorio.");
        }

        for (let i = 0; i < notas.length; i++) {
            if (typeof notas[i] !== 'number') {
                throw new Error("¡Error! Una de las notas no es un número.");
            }
        }

        const [primera, ...otras] = notas;

        let suma = 0;
        for (let j = 0; j < otras.length; j++) {
            suma = suma + otras[j];
        }

        const promedio = otras.length > 0 ? suma / otras.length : 0;

        const resultado = Object.freeze({
            nombre: nombre,
            primeraNota: primera,
            promedioDelResto: promedio.toFixed(2),
            totalDeNotas: notas.length
        });

        console.log(resultado);
        return resultado;

    } catch (error) {
        console.log(`Error: ${error.message}`);
        return null;
    }
}