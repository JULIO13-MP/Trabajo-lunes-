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