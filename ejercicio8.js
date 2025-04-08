// 8. Sumar solo los números positivos
console.log("\n8.Sumar solo los números positivos:");
const numeros = [-1, 4, -3, 2, 6];
console.log(numeros.filter(n => n > 0).reduce((a, b) => a + b, 0));