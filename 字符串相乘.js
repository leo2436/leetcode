var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let res = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    let pow = num2.length - i - 1;
    let down = num2[i];
    let carry = 0;
    let sum = [];
    for (let j = num1.length - 1; j >= 0; j--) {
      let up = num1[j];
      let product = (up * down + carry) % 10;
      carry = Math.floor((up * down + carry) / 10);
      sum.unshift(product);
    }
    for (let n = 0; n < pow; n++) {
      sum.push("0");
    }
    console.log("sum: ", sum);
    if (carry !== 0) sum.unshift(carry);
    res.push(sum.join(""));
    console.log("res: ", res);
  }
  let result = res.reduce(addStrings);
  return result;
};

let addStrings = function (num1, num2) {
  let a = num1.length,
    b = num2.length,
    result = "",
    tmp = 0;
  while (a || b) {
    a ? (tmp += +num1[--a]) : "";
    b ? (tmp += +num2[--b]) : "";

    result = (tmp % 10) + result;
    if (tmp > 9) tmp = 1;
    else tmp = 0;
  }
  if (tmp) result = 1 + result;
  return result;
};

let result = multiply("123456789", "987654321");
console.log("result: ", result);
