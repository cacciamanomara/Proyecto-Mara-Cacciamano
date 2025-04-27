// Arrays
const animalesDisponibles = ['perro', 'gato'];

// Función 
function iniciarSimulador() {
  let continuar = true;
  while (continuar) {
    // Qué animal quiere adoptar
    let animal = prompt("¿Qué animal te gustaría adoptar? (perro o gato)");
    
    // Verificar 
    if (animal === "perro" || animal === "gato") {
      // Preguntar su nombre
      let nombre = prompt("¿Cómo se llamará tu " + animal + "?");
      // M de éxito
      alert("¡Adoptaste un " + animal + " llamado " + nombre + "! 🐾");
      // Registrar 
      console.log("Adoptaste un " + animal + " llamado " + nombre);
      
      // Adoptar otro animal
      continuar = confirm("¿Quieres adoptar otro animal?");
    } else {
      // Si el animal no está disponible
      alert("Lo siento, solo puedes adoptar perros o gatos 🐾");
      // Registrar el error
      console.log("Intento fallido con animal: " + animal);
      
      // Intentar nuevamente
      continuar = confirm("¿Quieres intentarlo de nuevo?");
    }
  }
  
  // Mensaje final 
  alert("Gracias por usar el simulador de adopción. ¡Hasta pronto!");
}
