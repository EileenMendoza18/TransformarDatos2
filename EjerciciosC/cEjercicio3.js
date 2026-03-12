// 3. Registro de actividades con manejo de errores
// Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener
// {nombre, fecha}.
// • Usa un try...catch para validar que ambas propiedades existan.
// • Si falta alguna, lanza un error indicando que la actividad no es válida.
// • Si todo está correcto, muestra un mensaje confirmando el registro.

function registrarActividad(actividad) {
  try {
    if (!actividad.nombre || !actividad.fecha) {
      throw new Error("La actividad no es válida: faltan propiedades requeridas (nombre, fecha)");
    }
    console.log(`Actividad registrada correctamente: "${actividad.nombre}" el ${actividad.fecha}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Pruebas
registrarActividad({ nombre: "Fútbol", fecha: "2025-06-01" });
registrarActividad({ nombre: "Natación" });                     
