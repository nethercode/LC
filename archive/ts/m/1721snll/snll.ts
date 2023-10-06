class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  
  function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let firstPtr: ListNode | null = head;
    let secondPtr: ListNode | null = head;
    let firstNode: ListNode | null = null;
    let count = 1;
  
    // Move the firstPtr k-1 steps forward
    while (count < k && firstPtr !== null) {
      firstPtr = firstPtr.next;
      count++;
    }
  
    // If k is greater than the number of nodes, return the original head
    if (firstPtr === null) {
      return head;
    }
  
    // Move firstPtr to the kth node from the beginning
    firstNode = firstPtr;
    
    // Move firstPtr to the end and secondPtr to the kth node from the end
    while (firstPtr !== null && firstPtr.next !== null) {
      firstPtr = firstPtr.next;
      secondPtr = secondPtr!.next;
    }
  
    // Swap the values of the two nodes
    if (secondPtr !== null && firstNode !== null) {
      const temp = secondPtr.val;
      secondPtr.val = firstNode.val;
      firstNode.val = temp;
    }
  
    return head;
  }
  