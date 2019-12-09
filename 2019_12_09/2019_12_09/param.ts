function minhafuncao(x:number, y = 7 ): void {
    console.log(x);
    console.log(y);

}
function somavarios(... parametros:
                  number[]): number{
   let result:number = 0;
   for (let i=0 ; i<parametros.length; i++){
       result = result + parametros[i];
   }
   return result;
}

//minhafuncao(2);
//minhafuncao(2,3);
console.log("Somando lista vazia = "+somavarios());
console.log("Somando lista de 1 cabra = "+somavarios(10));
console.log("Somando lista de varios cabras  = "+somavarios(10,15,20,30));