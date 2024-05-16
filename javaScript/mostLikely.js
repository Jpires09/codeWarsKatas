// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

function mostLikely(prob1,prob2){
    return (parseFloat(prob1.split(':')[0]) / parseFloat(prob1.split(':')[1]) > parseFloat(prob2.split(':')[0]) / parseFloat(prob2.split(':')[1]))
}

// function mostLikely(p1, p2) {
//     [p1, p2] = [p1, p2].map(p => p.split(':').reduce((n, d) => n / d));
//     return p1 > p2;
// }