function tribonacci(signature,n){
    let returnArray = []
    if (!n == 0){ 
        //  starts array with signature
        for (let i = 0; i < n; i++) {
            returnArray[i] = signature [i]       
        }
        for (let i = 3; i < n; i++) {
            returnArray[i] = returnArray[i-1] + returnArray[i-2] + returnArray[i-3]   
        }}
    return returnArray
}


// test:

const signature = [1,1,1];
const n = 5;


console.log(tribonacci(signature,n))