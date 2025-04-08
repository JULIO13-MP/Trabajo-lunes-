const readline = require('readline-sync');

function menuInteractivo() {
    let opcion;

    do {
        console.log("\nMenú:");
        console.log("1. Saludar");
        console.log("2. Decir adiós");
        console.log("3. Salir");

        opcion = readline.question("Elige una opcion (1, 2, 3): ");

        if (opcion === "1") {
            console.log("¡Hola!");
        } else if (opcion === "2") {
            console.log("¡Adiós!");
        } else if (opcion === "3") {
            console.log("Saliendo...");
        } else {
            console.log("Opción no válida. Intenta de nuevo.");
        }
    } while (opcion !== "3");
}

menuInteractivo();
