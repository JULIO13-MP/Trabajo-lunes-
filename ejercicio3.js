// 3. Contar elementos pares
console.log("\n3. Contar elementos pares:");
function contarPares(arr) {
    return arr.filter(num => num % 2 === 0).length;
}
console.log(contarPares([1, 2, 3, 4, 6, 7]));