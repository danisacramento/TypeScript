"use strict";
exports.__esModule = true;
var Carro2_1 = require("./Carro2");
var c1; //Cria uma referência
c1 = new Carro2_1.Carro2(); //Aloca memória;
//Atribui valores aos atributos;
c1.setModelo("Sedan");
c1.setAno(1991);
c1.setPlaca("ABC-1234");
//manipulação da classe 
console.log("ANDAR:");
c1.andar();
console.log("LIGAR:");
c1.ligar();
console.log("ANDAR:");
c1.andar();
console.log("PARAR:");
c1.parar();
console.log("DESLIGAR:");
c1.desligar();
console.log("PARAR:");
c1.parar();
