
function snailSort(array) {
    let result =[]; 

    while (array.length > 0) {
debugger
        // Pegar a primeira linha e adicionar ao resultado
    result = result.concat(array.shift())

        // Pegar a última coluna e adicionar ao resultado
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].pop())
        }
        
        // Pegar a última linha e adicionar ao resultado (revertendo a ordem)
        if (array.length > 0) {
            result = result.concat(array.pop().reverse())
        }
        
        // Pegar a primeira coluna e adicionar ao resultado (revertendo a ordem)
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift())
        }
    }

    return result
  
}   
const array = [[1,2,3] , [4,5,6] , [7,8,9]]   

console.log(snailSort(array))
