/* vou fazer uma versao 1 que recebe o vetor de STRINGS e já imprime dentro da funcao */
function geraDivs() {
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    for (var i = 0; i < itens.length; i++) {
        console.log("<div id='div" + (i + 1) + "'>" + itens[i] + "</div>");
    }
}
/* versao 2 - equivalente à versão 1, porém usando Expression Languages */
function geraDivs2() {
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    for (var i = 0; i < itens.length; i++) {
        console.log("<div id=\"div" + (i + 1) + "\"> " + itens[i] + " </div>");
    }
}
/* versao 3 - concatenando o resultado e imprimindo fora - sem expression language */
function geraDivs3() {
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    var resultado = "";
    for (var i = 0; i < itens.length; i++) {
        resultado += "<div id='div" + (i + 1) + "'>" + itens[i] + "</div>\n";
    }
    return resultado;
}
/* versao 4 - concatenando com expression languages */
function geraDivs4() {
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    var resultado = "";
    for (var i = 0; i < itens.length; i++) {
        resultado += "<div id=\"div" + (i + 1) + "\"> " + itens[i] + " </div>\n";
    }
    return resultado;
}
console.log("GERADIV V1 -------------------------------------------");
geraDivs("ValorA", "ValorB", "ValorC", "ValorD", "ValorE", "ValorF", "ValorG");
console.log("GERADIV V2 -------------------------------------------");
geraDivs2("ValorA", "ValorB", "ValorC", "ValorD", "ValorE", "ValorF", "ValorG");
console.log("GERADIV V3 -------------------------------------------");
console.log(geraDivs3("ValorA", "ValorB", "ValorC", "ValorD", "ValorE", "ValorF", "ValorG"));
console.log("GERADIV V4 -------------------------------------------");
console.log(geraDivs4("ValorA", "ValorB", "ValorC", "ValorD", "ValorE", "ValorF", "ValorG"));
