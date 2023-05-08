function moveZeros(arr) {
    let zerolessArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            zerolessArr.push(arr[i])
        }
    }
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