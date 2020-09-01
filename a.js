var str = 'abcdefghijklmnopqrstuvwxyz';
function getFiveChars() {
  const res = [];
  for (let i = 0; i < 5; i++) {
    const char = str[Math.floor(Math.random() * 26)];
    res.push(char)
  }
  return res
}
console.log('getFiveChars(): ', getFiveChars());