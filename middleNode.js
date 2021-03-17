// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。

var middleNode = function (head) {
  let tmp = head;
  let num = 0;
  while (tmp) {
    num++;
    tmp = tmp.next;
  }
  let mid = Math.floor(num / 2) + 1;
  while (mid > 1) {
    head = head.next;
    mid--;
  }
  return head;
};

var middleNode = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
