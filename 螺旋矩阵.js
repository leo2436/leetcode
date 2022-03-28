/**
 * @param {number} n
 * @return {number[][]}
 */

// [0, 0] [0, 1] [0, 2] right y++
// [1, 2] [2, 2] down x++
// [2, 1] [2, 0] left y--
// [1, 0] up x--


var generateMatrix = function(n) {
    const res = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        res.push(row);
    }
    let state = 'right'; 
    let x = 0, y = 0;
    for (let i = 1; i < n * n + 1; i++) {
        res[x][y] = i;
        switch (state) {
            case 'right':
                if (y >= n - 1 || res[x][y + 1]) {
                    state = 'down';
                    x++;
                    break;
                }
                res[x][y] = i;
                y++;
                break;
            case 'down':
                if (x >= n - 1 || res[x + 1][y]) {
                    state = 'left';
                    y--;
                    break;
                }
                res[x][y] = i;
                x++;
                break;
            case 'left':
                if (y <= 0 || res[x][y - 1]) {
                    state = 'up';
                    x--;
                    break;
                }
                res[x][y] = i;
                y--;
                break;
            case 'up':
                if (x <= 0 || res[x - 1][y]) {
                    state = 'right';
                    y++;
                    break;
                }
                res[x][y] = i;
                x--;
                break;
        }
    }
    return res;
};