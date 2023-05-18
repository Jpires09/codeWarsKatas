// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None

function firstNonRepeatingLetter(s) {
    // if (s.length < 2){
    //     return s[0]
    // }

    for (let i = 0; i < s.length; i++) {
        debugger
        let counter = 0
        for (let j = 0; j < s.length; j++) {
            if ((s[i] == s[j]) || (s[i].toUpperCase() == s[j]) || (s[i] == s[j].toUpperCase()))
                counter++
        }
        
        if (counter == 1) {
            return s[i]
        }
    }
    return ""
}

// function firstNonRepeatingLetter(str){
//   return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
// }