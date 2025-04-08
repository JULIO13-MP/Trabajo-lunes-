// Ejercicio 12 adaptado para Node.js
const readline = require('readline-sync');

function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;
    
    while (intentos > 0) {
        const intento = readline.questionInt(`Adivina el número (1-10). Intentos restantes: ${intentos}: `);
        if (intento === numeroAleatorio) {
            console.log("¡Correcto!");
            return;
        }
        console.log("Incorrecto. Intenta de nuevo.");
        intentos--;
    }
    console.log("El número era:", numeroAleatorio);
}

// Llamar a la función para iniciar el juego
adivinarNumero();
