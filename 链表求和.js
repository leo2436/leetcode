var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(null);
  let tmp = head;
  let carry = 0;
  while (l1 || l2) {
    let firstVal = l1 ? l1.val : 0;
    let secondVal = l2 ? l2.val : 0;
    let sum = firstVal + secondVal + carry;
    tmp.val = sum % 10;
    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    if (l1 || l2) {
      tmp.next = new ListNode(0);
      tmp = tmp.next;
    }
  }
  if (carry === 1) tmp.next = new ListNode(1);
  return head;
};
