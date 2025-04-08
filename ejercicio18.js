const readline = require('readline-sync');

function sumarHastaCero() {
    let suma = 0;
    let num;

    do {
        num = readline.questionInt("Ingresa un número (0 para salir): ");
        suma += num;
    } while (num !== 0);

    console.log("Suma total:", suma);
}

sumarHastaCero();
