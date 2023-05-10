var uniqueInOrder=function(iterable){
    if (typeof iterable == 'object') {
        let newIterable = iterable.toString()
        console.log(newIterable)
        return uniqueInOrder(newIterable)                 
    }
// resolve strings vazias
    if (iterable.length === 0) {
        return []
    }
// resolve strings de tamanho 1    
    else if(iterable.length === 1){
        let answer = [iterable]
        return answer
    }
    else{
        let check = iterable[0]
//  checka se todos os elementos da string são iguais 
//  e retorna o primeiro item em caso positivo
        let counter = 0
        for (let j = 0; j < iterable.length; j++) {
            if (check === iterable[j]) {
                counter++
            }
            if (counter === iterable.length) {
                let answer = [iterable[0]]
                return answer
            }
        }
// resolve strings de tamanhos maiores que 1 e elementos diferentes
        let sliced = check;
        let i = 0;
        //  remove ',' dos array's
        for (let j = 0; j < iterable.length; j++) {
            if (iterable[j] == ',') {
                iterable = iterable.replace(',', '')
            }            
        }
        const originalLength = iterable.length
        while ( i < originalLength) {
            debugger
            while (iterable[0] === check) {
                iterable = iterable.slice(1)
            }
            if (iterable.length == 0){        
                let answer = []
                for (let j = 0; j < sliced.length; j++) {
                    answer[j] = sliced[j]
                }
                return answer
            }        
            sliced = sliced + iterable[0]
            check = iterable[0]
            i++
            
        }
        let answer = []
        for (let j = 0; j < sliced.length; j++) {
            answer[j] = sliced[j]
        }
        
        return answer
    }
}

console.log(uniqueInOrder([1 , 1 , 2 , 2 , 3 , 3]))