// 2. Número mayor y menor
console.log("\n2. Número mayor y menor:");
function mayorYMenor(arr) {
    return { mayor: Math.max(...arr), menor: Math.min(...arr) };
}
console.log(mayorYMenor([10, 5, 2, 8, 20]));