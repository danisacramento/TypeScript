function minhafuncao(x, y) {
    if (y === void 0) { y = 7; }
    console.log(x);
    console.log(y);
}
function somavarios() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < parametros.length; i++) {
        result = result + parametros[i];
    }
    return result;
}
//minhafuncao(2);
//minhafuncao(2,3);
console.log("Somando lista vazia = " + somavarios());
console.log("Somando lista de 1 cabra = " + somavarios(10));
console.log("Somando lista de varios cabras  = " + somavarios(10, 15, 20, 30));
