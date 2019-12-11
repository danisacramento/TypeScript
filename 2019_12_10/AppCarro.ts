import {Carro} from "./Carro";

let c1:Carro;       //Cria uma referência
c1 = new Carro();   //Aloca memória;

//Atribui valores aos atributos;
c1.modelo = "Sedan";
c1.ano = 1991;
c1.placa = "ABC-1234"

//manipulação da classe 
console.log("ANDAR:")
c1.andar();
console.log("LIGAR:")
c1.ligar();
console.log("ANDAR:")
c1.andar();
console.log("PARAR:")
c1.parar();
console.log("DESLIGAR:")
c1.desligar();
console.log("PARAR:")
c1.parar();
