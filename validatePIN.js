function validatePIN (pin) {
    return (
            ((parseInt(pin).length == 4) || (parseInt(pin).length == 6)) && 
            (
                (parseInt(pin) >= 1000) || (pin === '0000') ||
                (parseInt(pin) >= 100000) || (pin === '000000')
             )
        )
}

//test

const pin = '1234';
console.log(parseInt(pin).length)
console.log(validatePIN(pin))
// console.log(validatePIN(pin1))
// console.log(parseInt(pin2))                    1
// console.log(validatePIN(pin2))           1     e            1
// console.log(parseInt(pin3))           (0 ou 1) e    (1     ou     0)
// console.log(validatePIN(pin3))        (1 ou 0) e ((1 ou 0) ou (0 ou 0))