//export - possibilita que outros projetos possam ver a classe
export class Carro2{
    private placa :string;
    private cor   :string;
    private modelo:string;
    private ano   :number;
    private ligado:boolean;

    //Metodos acessores e modificadores:

    public getPlaca():String{
        return this.placa
    }

    public setPlaca(placa:string):void{
        this.placa = placa;
    }

    public getCor():String{
        return this.cor;
    }

    public setCor(cor:string):void{
        this.cor = cor;
    }

    public getModelo():String{
        return this.modelo;
    }

    public setModelo(modelo:string):void{
        this.modelo = modelo;
    }

    public getAno():number{
        return this.ano;
    }

    public setAno(ano:number):void{
        if(ano<1900 || ano>2100)
            this.ano = ano;
        else
            console.log("valor do ano é inválido!");
    }

    public getLigado():boolean{
        return this.ligado;
    }

    public setLigado(ligado:boolean):void{
        this.ligado = ligado;
    }

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
