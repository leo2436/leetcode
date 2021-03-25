// var myAtoi = function(s) {
//   let i = 0;
//   let result = 0;
//   let flag = '';
//   let max = Math.pow(2, 31) - 1
//   while(s[i] === ' ') {
//     i++;
//   }
//   if (s[i] === '-') {
//     flag = '-';
//     i++;
//   } else if (s[i] === '+') {
//     flag = '+';
//     i++;
//   }
//   while(/\d/.test(s[i]) && i < s.length) {
//     let r = s[i] - '0';
//     if (result * 10 + r > max) {
//       return flag === '-' ? -Math.pow(2, 31) : Math.pow(2, 31) - 1;
//     }
//     result = result * 10 + r;
//     i++;
//   }
//   return flag === '-' ? -result : result;
// };

// 自动机
class Solution {
  sign = 1;
  state = "start";
  res = 0;
  max = Math.pow(2, 31) - 1;
  min = -Math.pow(2, 31);
  table = {
    start: ["start", "signed", "inNumber", "end"],
    signed: ["end", "end", "inNumber", "end"],
    inNumber: ["end", "end", "inNumber", "end"],
    end: ["end", "end", "end", "end"],
  };
  getCol = (char) => {
    if (char === " ") return 0;
    if (char === "+" || char === "-") return 1;
    if (/\d/.test(char)) return 2;
    else return 3;
  };
  changeState = (char) => {
    this.state = this.table[this.state][this.getCol(char)];
    if (this.state === "signed") {
      this.sign = char === "+" ? 1 : -1;
    } else if (this.state === "inNumber") {
      this.res = this.res * 10 + Number(char);
      this.res =
        this.sign === 1
          ? Math.min(this.max, this.res)
          : Math.min(-this.min, this.res);
    }
  };
}

function myAtoi(s) {
  let solution = new Solution();
  for (let char of s) {
    solution.changeState(char);
  }
  return solution.sign * solution.res;
}
