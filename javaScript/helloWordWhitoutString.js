const helloWorld = () => {
  const charCodeForHInUperCase = [72]
  const charCodeLowerCases1 = [69,76,76,79,44,32];
  const charCodeForWInUpperCase = [87]
  const charCodeLowerCases2 = [79,82,76,68,33];
  const wInUpperCase = String.fromCharCode(...charCodeForWInUpperCase)
  const hInUpperCase  = String.fromCharCode(...charCodeForHInUperCase)
  let lowerCases1 = String.fromCharCode(...charCodeLowerCases1);
  let lowerCases2 = String.fromCharCode(...charCodeLowerCases2);
  lowerCases2= lowerCases2.toLowerCase()
  lowerCases1= lowerCases1.toLowerCase()
  return hInUpperCase+lowerCases1+wInUpperCase+lowerCases2
};

console.log(helloWorld())
