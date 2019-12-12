import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa{
    
    private valorHora: number;
    private numHora: number;

    public setValorHora(valorHora: number): void{
        this.valorHora = valorHora;
    }
    public getValorHora(): number{
        return this.valorHora;
    }
    public setNumHora(numHora: number): void{
        this.numHora = this.numHora;
    }
    public getNumHora(): number{
        return this.numHora;
    }
}