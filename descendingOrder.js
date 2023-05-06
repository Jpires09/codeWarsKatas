
function descendingOrder(n){
    const string = n.toString();
    let array = []
    for (let i = 0; i < string.length; i++) {
        array [i] = string[i]   
    }   
    array.sort(function(a,b){return a-b});
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