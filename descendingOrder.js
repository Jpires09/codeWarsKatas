
function descendingOrder(n){
    const string = n.toString();
    let array = []
// alimenta array com os valores de string
    for (let i = 0; i < string.length; i++) {
        array [i] = string[i]   
    }   
// ordena o array em ordem decrescente
    array.sort(function(a,b){return a-b});
// tranforma o array ordenado em um inteiro
    n = 0;
    for (let i = 0; i < array.length; i++) {
         n = n + (array[i]*10**i)
    }
    return n
}

let n = 42145;
console.log(descendingOrder(n))


// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }