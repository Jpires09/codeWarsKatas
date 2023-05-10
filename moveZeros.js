function moveZeros(arr) {
    let zerolessArr = [];
// transfere os 0's para o final do array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            zerolessArr.push(arr[i])
        }
    }
// preenche os espaços vazios com 0 
    for (let i = 0; i < arr.length; i++) {
        if (typeof zerolessArr[i] == 'undefined')  {
            zerolessArr[i] = 0
        }        
    }    
    return zerolessArr
} 

//estudar soluções abaixo

// var moveZeros = function (arr) {
//     return [
//       ...(arr.filter(n => n !== 0)),
//       ...(arr.filter(n => n === 0))
//     ];
//   }

//   function moveZeros(arr) {
//     return arr.sort((a, b) => b === 0 ? -1 : 0);
//   }