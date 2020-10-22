var isValidSudoku = function(board) {
  let rows = {};
  let columns = {};
  let boxes = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
      let num = board[i][j];
      if (num !== '.') {
        if (rows[i + '-' + num] || columns[j + '-' + num] || boxes[boxIndex + '-' + num]) {
          return false;
        }
        rows[i + '-' + num] = true;
        columns[j + '-' + num] = true;
        boxes[boxIndex + '-' + num] = true;
      }
    }
  }
  return true;
};