function findMissingLetter(array){
    const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
//  function that will set the starter variable to the index of
//  the first letter of array
    function setStarter(){ 
        for (let i = 0; i < lowerCaseAlphabet.length; i++) {
        if ((lowerCaseAlphabet[i] == array[0]) || 
            (lowerCaseAlphabet[i].toUpperCase() == array[0])) 
                return i 
        }
    }
//  function that finds the missing letter
    function returnMissing(alphabet){
        for (let i = 0; i < array.length; i++) {
            if ( array[i] != alphabet[start + i]) {
                return  alphabet[start + i]
            } 
        }
    }
// --------------------------- MAIN CODE ---------------------------
    let start = setStarter()
    //  Set appart return for upper case and lower case array's
    if ((array[0] === lowerCaseAlphabet[start]) || (array[1] === lowerCaseAlphabet[start + 1])) {
        return returnMissing(lowerCaseAlphabet)
    } else {
        return returnMissing(lowerCaseAlphabet.toUpperCase())
    }
}

// function findMissingLetter(array)
// {
//    var i=array[0].charCodeAt();
//    array.map(x=>  x.charCodeAt()==i?i++:i);
//    return String.fromCharCode(i);
// }