"use strict";
exports.__esModule = true;
var teclado = require("readline-sync");
var titulo;
var descri;
titulo = teclado.question("Digite um titulo    ");
descri = teclado.question("Digite a descricao  ");
var pagina = "<HTML> <HEAD> <TITLE> .: Meu Site :. </TITLE> </HEAD> <BODY> <H1> " + titulo + " </H1>";
console.log(pagina);
