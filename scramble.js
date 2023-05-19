function scramble(str1, str2) {
    let a1 = str1.split("")
    let a2 = str2.split("")
    debugger
    if (a2.length == 0) {
        return true
    } else{
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] == a2[0]) {
                a2.shift()
                scramble(a1.join(""), a2.join(""))
            }
        }
    }

    return false;
}
  
console.log(scramble('rkqodlw', 'world'))