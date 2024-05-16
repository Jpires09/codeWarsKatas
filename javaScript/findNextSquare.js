// Return the next square if sq is a perfect square, -1 otherwise
function findNextSquare(sq) {
    if(!Number.isInteger(sqrt(sq))){
        return -1;
    } else{
        return (sqrt(sq)+1)**2
    }
  }