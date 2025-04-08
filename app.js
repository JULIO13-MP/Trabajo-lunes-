function busquedalinial(arr,elemento){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elemento){
        return i;
        }
    }
    return -1;
}
const arreglo=[10,2,3,8,4,9,7];
const elementobuscado=8;
const indice=busquedalinial(arreglo,elementobuscado);
console.log(`El Elemento ${elementobuscado} se encuentra en el indice ${indice}`)

// 1. Sumar elementos de un array
console.log("1. Sumar elementos de un array:");
function sumarArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumarArray([1, 2, 3, 4, 5]));

// 2. Número mayor y menor
console.log("\n2. Número mayor y menor:");
function mayorYMenor(arr) {
    return { mayor: Math.max(...arr), menor: Math.min(...arr) };
}
console.log(mayorYMenor([10, 5, 2, 8, 20]));

// 3. Contar elementos pares
console.log("\n3. Contar elementos pares:");
function contarPares(arr) {
    return arr.filter(num => num % 2 === 0).length;
}
console.log(contarPares([1, 2, 3, 4, 6, 7]));

// 4. Ordenar un array sin .sort()
console.log("\n4. Ordenar un array sin .sort():");
function ordenarArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
console.log(ordenarArray([5, 3, 8, 1, 2]));

// 5. Buscar un elemento
console.log("\n5. Buscar un elemento:");
function buscarElemento(arr, nombre) {
    const index = arr.indexOf(nombre);
    return index !== -1 ? index : "No encontrado";
}
console.log(buscarElemento(["Ana", "Luis", "Carlos"], "Luis"));

// 6. Revertir un array sin .reverse()
console.log("\n6. Revertir un array:");
function revertirArray(arr) {
    const nuevo = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        nuevo.push(arr[i]);
    }
    return nuevo;
}
console.log(revertirArray([1, 2, 3, 4]));

// 7. Convertir nombres a mayúsculas
console.log("\n7. Convertir nombres a mayúsculas:");
const nombres = ["ana", "luis", "pedro"];
console.log(nombres.map(n => n.toUpperCase()));

// 8. Sumar solo los números positivos
console.log("\n8. Sumar solo los números positivos:");
const numeros = [-1, 4, -3, 2, 6];
console.log(numeros.filter(n => n > 0).reduce((a, b) => a + b, 0));

// 9. Obtener el primer múltiplo de 5
console.log("\n9. Obtener el primer múltiplo de 5:");
const lista = [3, 11, 12, 25, 30];
console.log(lista.find(n => n % 5 === 0));

// 10. Tabla de multiplicar
console.log("\n10. Tabla de multiplicar:");
let numero = 6;
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// 11. Secuencia de Fibonacci
console.log("\n11. Secuencia de Fibonacci:");
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib);

// 12. Adivinar un número
console.log("\n12. Adivinar un número:");
let secreto = Math.floor(Math.random() * 10) + 1;
let intento;
let intentos = 0;
// Descomentar para correr en entorno interactivo:
// while (intento !== secreto) {
//     intento = parseInt(prompt("Adivina el número del 1 al 10:"));
//     intentos++;
// }
// console.log(`¡Correcto! Lo adivinaste en ${intentos} intentos.`);

// 13. Contar regresivamente
console.log("\n13. Contar regresivamente:");
let desde = 5;
while (desde >= 0) {
    console.log(desde--);
}

// 14. Validar número mayor que 0
console.log("\n14. Validar entrada de usuario:");
// let entrada;
// do {
//     entrada = parseInt(prompt("Ingresa un número mayor que 0:"));
// } while (entrada <= 0);
// console.log("Número válido:", entrada);

// 15. Menú hasta que el usuario salga
console.log("\n15. Menú interactivo:");
// let opcion;
// do {
//     opcion = prompt("1. Saludar\n2. Decir adiós\n3. Salir");
//     if (opcion === "1") console.log("Hola");
//     if (opcion === "2") console.log("Adiós");
// } while (opcion !== "3");

// 16. Sumar impares del 1 al 50 y detener si supera 500
console.log("\n16. Sumar impares entre 1 y 50:");
let suma = 0;
let i = 1;
while (i <= 50) {
    if (i % 2 !== 0) {
        suma += i;
        if (suma > 500) break;
    }
    i++;
}
console.log("Suma:", suma);

// 17. Contador de intentos
console.log("\n17. Contador de intentos:");
let claveCorrecta = "1234";
let intentoLogin;
let contador = 0;
// while (intentoLogin !== claveCorrecta && contador < 3) {
//     intentoLogin = prompt("Ingresa la contraseña:");
//     contador++;
// }
// if (intentoLogin === claveCorrecta) console.log("Acceso concedido");
// else console.log("Acceso denegado");

// 18. Sumar hasta que se ingrese 0
console.log("\n18. Sumar hasta que se ingrese 0:");
let suma18 = 0;
// let num;
// while ((num = parseInt(prompt("Ingresa un número (0 para salir):"))) !== 0) {
//     suma18 += num;
// }
console.log("Suma total:", suma18);

// 19. Fibonacci hasta superar 100
console.log("\n19. Fibonacci hasta que un número supere 100:");
let fib19 = [0, 1];
while (fib19[fib19.length - 1] <= 100) {
    fib19.push(fib19[fib19.length - 1] + fib19[fib19.length - 2]);
}
console.log(fib19);

// 20. Múltiplos de 3 hasta 50
console.log("\n20. Múltiplos de 3 hasta 50:");
let m = 1;
while (m < 50) {
    if (m % 3 === 0) console.log(m);
    m++;
}


