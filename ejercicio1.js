// 1. Sumar elementos de un array
console.log("Sumar elementos de un array:");
function sumarArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumarArray([1, 2, 3, 4, 5]));