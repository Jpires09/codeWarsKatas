function validatePIN (pin){
    let numericPin = [];
    //clear PIN of NaN
    for (let i = 0; i < pin.length; i++) {
        if (!isNaN(parseInt(pin[i]))) {
            numericPin[i] = pin[i]
        }
    }
    //clear of empty spaces
    numericPin = numericPin.filter(entry => entry.trim() != '');    

    // measure lenghth
    if (parseInt(pin)< 0) {
        return false
    } else if((parseFloat(pin) % 1) !=0 ){
        return false
    }else if (((numericPin.length == 4) && (pin.length == 4)) || 
                ((numericPin.length == 6) && pin.length == 6)) {
        return true
    } else {
        return false
    }
}
//test

const pin = '1234x';

console.log(validatePIN(pin))
console.log(pin.length)
/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 

//const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);