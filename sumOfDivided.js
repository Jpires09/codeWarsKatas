function sumOfDivided(lst = []) {
    // returns true if num is prime
    function isPrime(num) {
        if (num <= 3) {
        return true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
        return false;
        }
        for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        }
        return true;
    }

    // fills the arrays of the finalArray
    function fillInternArray(prime){
    for (let i = 0; i < p.length; i++) {
        if (sumDivisibles(prime , lst) !== 'NaN') {
            return [prime , sumDivisibles(prime,lst)]
        }
    }
    }

    // 
    function sumDivisibles(prime , array){
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] % prime === 0) {
                sum = sum + array[i]
            }
        }
        return sum
    }
    // variables:
    let p = []
    let finalArray = []
    // fill the p array with the modules of j
    for (let i = 0; i < lst.length; i++) {
        for (let j = 0; j < lst[i]; j++) {
            if(isPrime(j) && ((j >= 2) || (j <= -2))){
                p.push(Math.sqrt(j**2))
            } 
        }
        let padding = 0
        for (let i = 0; i < (p.length + padding); i++) {
            debugger
            let trimOut = true
            for (let j = 0; j < lst.length; j++) {
                if (lst[j] % p[i] == 0){
                    trimOut = false
                } else if(sumDivisibles(p[i],lst) == 0){
                    trimOut = false
                }
            }
            if (trimOut) {
                p.splice((i-padding),1)
                padding++
            }             
        }
    // fill finalArray
    for (let i = 0; i < p.length; i++) {
        finalArray.push(fillInternArray(p[i]))              
    }


    
        return finalArray
    }
}
 
//const testing = ([12, 15], [ [2, 12], [3, 27], [5, 15] ]);
//testing([15,21,34,30,45], [ [2, 54], [3, 135], [5, 90], [7, 21] ]);
const testing = [15,21,24,30,45]
console.log(sumOfDivided(testing)) 
console.log(typeof testing) 
