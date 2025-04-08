const readline = require('readline-sync');

function contadorIntentos() {
    const claveCorrecta = "1234";
    let intentoLogin;
    let contador = 0;

    while (intentoLogin !== claveCorrecta && contador < 3) {
        intentoLogin = readline.question("Ingresa la Clave: ");
        contador++;

        if (intentoLogin === claveCorrecta) {
            console.log("Acceso concedido");
            return;
        } else {
            console.log("Contraseña incorrecta. Intentos restantes: " + (3 - contador));
        }
    }

    if (contador === 3 && intentoLogin !== claveCorrecta) {
        console.log("Acceso denegado. Has agotado los 3 intentos.");
    }
}

contadorIntentos();
