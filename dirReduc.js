function dirReduc(directions) {
  const oppositeDirections = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST'
  };

  const reducedDirections = [];

  for (const direction of directions) {
    const previousDirection = reducedDirections[reducedDirections.length - 1];

    if (previousDirection === oppositeDirections[direction]) {
      reducedDirections.pop();
    } else {
      reducedDirections.push(direction);
    }
  }

  return reducedDirections;
}

// function dirReduc(arr){
//   for(let i=0; i<arr.length; i++){
//       switch ( arr[i] + arr[i+1] ){
      
//               case "EASTWEST":
//               arr.splice(i,2);
//               i = i - i -1;  // ( i = -1 ) => reset the loop to scan the array from i=0  
//               break;
         
//               case "WESTEAST":
//               arr.splice(i,2);
//               i = i - i -1;
//               break;
         
//               case "NORTHSOUTH":
//               arr.splice(i,2);
//               i = i - i -1;
//               break;
         
//               case "SOUTHNORTH":
//               arr.splice(i,2);
//               i = i - i -1;
//               break;
//       }
//   }
//   return arr
// }
