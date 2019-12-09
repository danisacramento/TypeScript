// npm install --save @types/readline-sync

import teclado = require("readline-sync");

var titulo: string;
var descri: string;

titulo = teclado.question("Digite um titulo    ");
descri = teclado.question("Digite a descricao  ");

var pagina = `<HTML> <HEAD> <TITLE> .: Meu Site :. </TITLE> </HEAD> <BODY> <H1> ${titulo} </H1>`;

console.log(pagina);
