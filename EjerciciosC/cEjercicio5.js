// 5. Actualización de perfiles con inmutabilidad + rest
// Crea una función actualizarPerfil(perfil, ...nuevosDatos).
// Cada elemento de nuevosDatos será un objeto parcial como {edad: 22} o {ciudad:
// "Medellín"}.
// • Combina todos los datos usando inmutabilidad y spread.
// Retorna el nuevo perfil completo.


function actualizarPerfil(perfil, ...nuevosDatos) {
  
  return nuevosDatos.reduce(
    (acumulado, parcial) => ({ ...acumulado, ...parcial }),
    { ...perfil } 
  );
}

// Pruebas
const perfil = { nombre: "Juan", edad: 21, ciudad: "Bogotá" };

const actualizado = actualizarPerfil(
  perfil,
  { edad: 22 },
  { ciudad: "Medellín" },
  { email: "juan@correo.com" }
);

console.log(actualizado);


console.log(perfil);
// el perfil original no fue modificado