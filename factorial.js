function factorial(n) {
    if (n < 0) {
      return null;
    } else if (n <= 2) {
      return `${n}`;
    } else {
      const result = [1];
      for (let i = 2; i <= n; i++) {
        multiplyBy(result, i);
      }
      return result.reverse().join("");
    }
  }
  
  function multiplyBy(number, multiplier) {
    let carry = 0;
    for (let i = 0; i < number.length; i++) {
      const product = number[i] * multiplier + carry;
      number[i] = product % 10;
      carry = Math.floor(product / 10);
    }
    while (carry > 0) {
      number.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
  }
  
  console.log(factorial(23));
  