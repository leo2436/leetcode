// 反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

//  

// 示例 1：

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]


var reverseString = function (s) {
  let i = 0, j = s.length - 1;
  while(i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
};

var reverseString = function(s) {
  function helper(start, end) {
    if (start >= end) return;
    [s[start], s[end]] = [s[end], s[start]];
    helper(start + 1, end - 1);
  }
  helper(0, s.length - 1);
};