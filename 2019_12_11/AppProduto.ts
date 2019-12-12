import {Produto} from "./Produtos";

let p1: Produto;
let p2: Produto;
p1: new Produto(123, "livro","capa dura", 100.00, 10, "htt://fotodolivro.com.br/foto.jpg");
p2: new Produto(158, "caderno","brochura", 10.00, 5,"htt://fotodocaderno.com.br/foto.jpg");

console.log(p1.getInfo());
console.log(p2.getInfo());
console.log("------------------");
console.log(p1);
console.log(p2);
