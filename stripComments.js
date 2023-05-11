function solution(input = '', markers= []) {
//  string2array
    let output = input.split('\n')
//  slice comments out and trim
    for (let i = 0; i < markers.length; i++) {
        for (let j = 0; j < output.length; j++) {
            if (output[j].includes(markers[i])){
                output[j] = output[j].slice(0 , output[j].indexOf(markers[i])).trim()
            }           
        }        
    }
// array2string
    return  output.join('\n')
}
// estudar:
// function solution(input, markers){
//     return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
//   }

//   function solution(input, markers){
//     return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
//   }