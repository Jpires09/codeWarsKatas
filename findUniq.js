function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        debugger
        if (arr[i] != arr[i+1]) {
            if (arr[i+1] != arr[i+2]) {
                return arr[i+1]
            } else{
                return arr[i]
            }
        }
    }
}

const arr = [ 1, 0, 0];
const test = findUniq(arr);
console.log(test)

// function findUniq(arr) {
//     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }