

function isPangram(string){
    function splitString (string){
        return string.split("")
    }


    let lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
    let upperCase = lowerCase.toUpperCase();
    let splitedLowerCase = splitString(lowerCase);
    let splitedUpperCase = splitString(upperCase);
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < splitedLowerCase.length; j++) {
            debugger
            if ((string[i] == splitedLowerCase[j]) || (string[i] == splitedUpperCase[j])) {
                counter = counter + 1;
                delete splitedLowerCase[j];
                delete splitedUpperCase[j];
            }            
        }        
    }
    if (counter >= 26) {
        return true
    } else {
        return false
    }
}

// test  
const string = "The quick brown fox jumps over the lazy dog."

console.log(isPangram(string))

// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
//   }