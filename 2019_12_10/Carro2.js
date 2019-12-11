"use strict";
exports.__esModule = true;
//export - possibilita que outros projetos possam ver a classe
var Carro2 = /** @class */ (function () {
    function Carro2() {
        this.ligado = false;
    }
    //Metodos acessores e modificadores:
    Carro2.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro2.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    Carro2.prototype.getCor = function () {
        return this.cor;
    };
    Carro2.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Carro2.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro2.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro2.prototype.getAno = function () {
        return this.ano;
    };
    Carro2.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Carro2.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro2.prototype.setLigado = function (ligado) {
        this.ligado = ligado;
    };
    Carro2.prototype.andar = function () {
        if (this.ligado == true) {
            console.log("O carro da placa: " + this.placa + ", do modelo: " + this.modelo + ", do ano: " + this.ano + " ta andando");
        }
        else {
            console.log("O carro está desligado, LIGUE!!!");
        }
    };
    Carro2.prototype.parar = function () {
        if (this.ligado == true) {
            console.log("O carro do ano " + this.ano + ", do modelo" + this.modelo + " do ano " + this.ano + " ta parando!");
        }
        else {
            console.log("O carro está desligado, LIGUE!!!");
        }
    };
    Carro2.prototype.ligar = function () {
        if (this.ligado == false) {
            this.ligado = true;
            console.log("Ligando...");
        }
        else {
            console.log("O carro JÁ esta ligado!!!");
        }
    };
    Carro2.prototype.desligar = function () {
        if (this.ligado == true) {
            console.log("Desligando...");
            this.ligado = false;
        }
        else {
            console.log("O carro JÁ esta desligado!!!");
        }
    };
    return Carro2;
}());
exports.Carro2 = Carro2;
