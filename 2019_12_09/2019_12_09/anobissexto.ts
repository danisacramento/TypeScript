function ehBissexto(ano: number):boolean{
    if (ano % 4 === 0){
        if (ano % 100 === 0){
            if (ano % 400 === 0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
}

console.log("ano 2000 "+ehBissexto(2000));
console.log("ano 2004 "+ehBissexto(2004));
console.log("ano 1900 "+ehBissexto(1900));
console.log("ano 1820 "+ehBissexto(1820));
console.log("ano 2020 "+ehBissexto(2020));