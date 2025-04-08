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