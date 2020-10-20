var plusOne = function(digits) {
  let len = digits.length;
  if (digits[len - 1] !== 9) {
    digits[len - 1] += 1;
    return digits;
  } else {
    let i = len - 1;
    while (digits[i] === 9 && i >= 0) {
      digits[i] = 0;
      console.log('digits: ', digits);
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
      i--;
    }
    digits[i] += 1;
    return digits;
  }
};


let test = plusOne([1, 9, 9]);
console.log('test: ', test);