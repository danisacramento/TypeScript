import teclado=require("readline-sync");

var titulo:string;
var desc: string;

titulo = teclado.question("digite o titulo");
desc   = teclado.question("digte a descricao");

console.log("titulo = "+titulo);
console.log("desc = "+desc);

var result:string;

result = `Estamos testando o ${titulo} combinado com o ${desc}`;
console.log(result);