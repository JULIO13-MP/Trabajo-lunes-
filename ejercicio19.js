console.log("\n19. Fibonacci hasta que un número supere 100:");
let fib19 = [0, 1];
while (fib19[fib19.length - 1] <= 100) {
    fib19.push(fib19[fib19.length - 1] + fib19[fib19.length - 2]);
}
console.log(fib19);