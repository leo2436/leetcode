var findAnagrams = function(s, p) {
    const result = [];
    const window = new Array(26).fill(0);
    const target = new Array(26).fill(0);
    for (let c of p) {
        target[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        const c = s[end];
        window[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        if (end - start + 1 === p.length) {
            if (window.join('') === target.join(''))
                result.push(start);
        }
        if (end >= p.length - 1) {
            const c = s[start];
            window[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
            start++;
        }
    }
    return result;
};