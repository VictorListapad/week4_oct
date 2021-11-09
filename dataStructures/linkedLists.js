  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  const n1 = new ListNode(4);
  const n2 = new ListNode(8);
  const n3 = new ListNode(3);
  const n4 = new ListNode(11);
  // |4|->|8|->|3|->|11|

  n1.next = n2;
  n2.next = n3;
  n3.next = n4;

  const n5 = new ListNode(20);
  n2.next = n5;
  n5.next = n3;
  head.next = n5;

  let currentNode = head;

  while(currentNode != null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }