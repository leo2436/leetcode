var validateStackSequences = function(pushed, popped) {
    const res = [];
    for (let i = 0, j = 0; i < pushed.length; i++) {
        const pushedNum = pushed[i];
        res.push(pushedNum);
        while (res.length >= 1 && res[res.length - 1] === popped[j]) {
            res.pop();
            j++;
        }
    }
    return !res.length;
};