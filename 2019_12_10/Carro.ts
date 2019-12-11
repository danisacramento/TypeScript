//export - possibilita que outros projetos possam ver a classe
export class Carro{
    placa :string;
    cor   :string;
    modelo:string;
    ano   :number;
    ligado:boolean = false;

    andar():void{
        if(this.ligado==true){
            console.log(`O carro da placa: ${this.placa}, do modelo: ${this.modelo}, do ano: ${this.ano} ta andando`);
        }else{
            console.log("O carro está desligado, LIGUE!!!");
        }
        
    }

    parar():void{
        if(this.ligado==true){
        console.log("O carro do ano "+this.ano+", do modelo"+this.modelo+" do ano "+this.ano+" ta parando!");
        }else{
            console.log("O carro está desligado, LIGUE!!!");
        }
    }

    ligar():void{
        if(this.ligado==false){
            this.ligado = true;
            console.log("Ligando...")
        }else{
            console.log("O carro JÁ esta ligado!!!")
        }
    }

    desligar():void{
        if(this.ligado==true){
            console.log("Desligando...")
            this.ligado = false;
        }else{
            console.log("O carro JÁ esta desligado!!!")
        }
    }

}
