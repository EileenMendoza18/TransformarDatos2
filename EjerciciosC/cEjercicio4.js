// 4. Mezcla de configuraciones con spread y destructuración
// Simula un sistema donde existen opciones por defecto y opciones personalizadas:
// const defaults = { tema: "claro", idioma: "es" };
// Crea una función configurarUsuario(defaults, personalizadas) que:
// • Use spread para combinar ambas configuraciones sin mutarlas.
// • Use destructuración para obtener el idioma configurado.
// Retorna el idioma resultante.

const defaults = { tema: "claro", idioma: "es" };

function configurarUsuario(defaults, personalizadas) {
  // spread: combina sin mutar ninguno de los dos objetos originales
  const configuracionFinal = { ...defaults, ...personalizadas };

  // destructuración: extrae solo el idioma del resultado
  const { idioma } = configuracionFinal;

  return idioma;
}

// Pruebas
console.log(configurarUsuario(defaults, { idioma: "en", tema: "oscuro" })); // "en"
console.log(defaults); //  no fue mutado