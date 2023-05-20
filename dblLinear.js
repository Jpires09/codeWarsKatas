function dblLinear(n) {
    function cleanSequence(sequence) {
        for (let i = 0; i < sequence.length; i++) {
            
             if (sequence[i] == sequence[i+1]) {
                 sequence.splice(i,1)
             }
         }
    }
    
    let sequence = [1]
    let i = 0
    while ( sequence.length < n) {
        sequence.push(2 * sequence[i] + 1) 
        sequence.push(3 * sequence[i] + 1)
        i++
    }

    console.log(sequence.length)
    sequence.sort((a,b) => a - b)
    cleanSequence(sequence)
    console.log(sequence.length)
    while ( sequence.length < n) {
        for (let j = i ; sequence.length < n; j++) {
            sequence.push(2 * sequence[j] + 1) 
            sequence.push(3 * sequence[j] + 1)
            i++
        }
        sequence.sort((a,b) => a - b)
        cleanSequence(sequence)
    }

    console.log(sequence)
    return sequence[n]
}
console.log(dblLinear(100))