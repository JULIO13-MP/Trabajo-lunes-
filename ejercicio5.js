// 5. Buscar un elemento
console.log("\n5. Buscar un elemento:");
function buscarElemento(arr, nombre) {
    const index = arr.indexOf(nombre);
    return index !== -1 ? index : "No encontrado";
}
console.log(buscarElemento(["Ana", "Luis", "Carlos"], "Luis"));