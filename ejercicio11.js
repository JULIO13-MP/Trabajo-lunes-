// 11. Secuencia de Fibonacci
console.log("\n11. Secuencia de Fibonacci:");
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib);