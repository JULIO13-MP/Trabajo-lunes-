// Ejercicio 14 adaptado para Node.js
const readline = require('readline-sync');

function validarNumeroMayorQueCero() {
    let entrada;

    // Continuamos pidiendo un número hasta que sea mayor que 0
    do {
        entrada = readline.questionInt("Ingresa un número mayor que 0: ");
    } while (entrada <= 0);

    console.log("Numero válido:", entrada);
}

// Llamar a la función para ejecutar el código
validarNumeroMayorQueCero();
