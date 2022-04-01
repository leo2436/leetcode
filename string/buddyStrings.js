var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (map[char]) {
        map[char]++;
      } else {
        map[char] = 1;
      }
      if (map[char] >= 2) return true;
    }
    return false;
  } else {
    let count = 0;
    let first = -1,
      second = -1;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        count++;
        if (count === 1) first = i;
        if (count === 2) second = i;
      }
    }
    return (
      count === 2 && s[first] === goal[second] && s[second] === goal[first]
    );
  }
};
