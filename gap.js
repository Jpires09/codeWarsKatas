// So this function should return the first pair of two prime numbers spaced with a gap of g 
// between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing
//  (or ... depending on the language). 
function gap(g, m, n) {
debugger
   function isPrime(num) {
      if (num <= 3) {
        return true;
      }
      if (num % 2 === 0 || num % 3 === 0) {
        return false;
      }
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
          return false;
        }
      }
      return true;
    }
   let prime = []
   let interval = []
   for (let i = m; i < n; i++) {
      interval.push(i)      
   }
   for (let i = 0; i < interval.length; i++) {
      if (isPrime(interval[i])) {
         prime.push(interval[i])
      }      
   }
   for (let i = 0; i < prime.length; i++) {
      if (prime[i+1]-prime[i] == g) {
         return [prime[i] , prime[i+1]]
      }      
   }
   return null
}

console.log(gap(6,100,110))