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