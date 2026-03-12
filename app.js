function crearEstudiante(nombre, ...notas) {
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

        let promedio;
        if (otras.length > 0) {
            promedio = suma / otras.length;
        } else {
            promedio = 0;
        }

        const resultado = {
            nombre: nombre,
            primeraNota: primera,
            promedioDelResto: promedio.toFixed(2),
            totalDeNotas: notas.length
        };

        Object.freeze(resultado);

        return resultado;

    } catch (error) {
        alert(error.message);
        return null;
    }
}

function iniciarMenu() {
    let bandera = true;

    while (bandera === true) {
        let eleccion = prompt(
            "MENÚ DE EJERCICIOS\n\n" +
            "1. Crear Registro de Estudiante\n" +
            "0. Salir\n\n" +
            "Escribe el número del ejercicio:"
        );

        if (eleccion === "1") {
            // Aquí llamamos a la función con datos de prueba
            const estudianteNuevo = crearEstudiante("Santiago", 4.0, 5.0, 3.5, 4.2);
            
            if (estudianteNuevo !== null) {
                console.log("--- Estudiante Registrado ---");
                console.log(estudianteNuevo);
                alert("¡Listo! Mira los resultados en la consola (F12)");
            }
        } 
        else if (eleccion === "0") {
            alert("Saliendo del programa...");
            bandera = false; // Esto rompe el ciclo y cierra el menú
        } 
        else {
            alert("Esa opción no existe. Por favor, marca 1 o 0.");
        }
    }
}

iniciarMenu();