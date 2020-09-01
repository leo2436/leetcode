var canVisitAllRooms = function (rooms) {
  let len = rooms.length;
  let visted = new Array(len).fill(false);
  visted[0] = true;
  let queue = rooms[0];
  while (queue.length) {
    let key = queue.shift();
    if (visted[key] === false) {
      visted[key] = true;
      queue.push(...rooms[key]);
    }
  }
  return visted.every(room => room === true);
};

let rooms = [[1, 3], [3, 0, 1], [2], [0]];
let res = canVisitAllRooms(rooms);
console.log('res: ', res);