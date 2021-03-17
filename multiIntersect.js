var multiIntersect = (...arrs) => {
  return Array.from(
    new Set(
      arrs.reduce((prev, curr) => {
        return prev.filter((num) => curr.includes(num));
      })
    )
  );
};

let a = [1, 2, 3, 4];
let b = [2, 3, 5, 8];
let c = [2, 3, 9];

let res = multiIntersect(a, b, c);
console.log("res: ", res);
