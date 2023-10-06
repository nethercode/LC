class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  // Find the middle of the list using the slow-fast pointer technique
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Split the list into two halves
  const mid: ListNode | null = slow!.next;
  slow!.next = null;

  // Recursively sort the two halves of the list
  const left: ListNode | null = sortList(head);
  const right: ListNode | null = sortList(mid);

  // Merge the sorted halves of the list
  const dummy = new ListNode(0);
  let cur = dummy;
  let l = left;
  let r = right;
  while (l && r) {
    if (l.val < r.val) {
      cur.next = l;
      l = l.next;
    } else {
      cur.next = r;
      r = r.next;
    }
    cur = cur.next;
  }
  cur.next = l || r;

  return dummy.next;
}
