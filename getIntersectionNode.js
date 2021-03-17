// 编写一个程序，找到两个单链表相交的起始节点。

// var getIntersectionNode = function (headA, headB) {
//     let currenA = headA, currenB = headB;
//     let map = new Map();
//     while(currenA) {
//         map.set(currenA, true);
//         currenA = currenA.next;
//     }

//     while(currenB) {
//         if(map.has(currenB)) return currenB;
//         currenB = currenB.next;
//     }
//     return null;
// };

var getIntersectionNode = function (headA, headB) {
  let currenA = headA,
    currenB = headB;
  while (currenA || currenB) {
    if (currenA === currenB) return currenA;
    currenA = currenA ? currenA.next : headB;
    currenB = currenB ? currenB.next : headA;
  }
  return null;
};
