var minWindow = function (s, t) {
  let map = {};
  let window = {};
  let valid = 0;
  let len = Number.MAX_VALUE;
  let start = 0;
  for (let c of t) {
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
    }
  }
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      window[s[i]] = (window[s[i]] || 0) + 1;
      if (window[s[i]] === map[s[i]]) {
        valid++;
      }
    }
    while (Object.keys(map).length === valid) {
      if (i - j < len) {
        len = i - j + 1;
        start = j;
      }
      if (window[s[j]]) {
        window[s[j]]--;
        if (window[s[j]] < map[s[j]]) {
          valid--;
        }
      }
      j++;
    }
  }

  return len === Number.MAX_VALUE ? "" : s.substr(start, len);
};
