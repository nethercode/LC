/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Merge two sorted linked lists.
 * @param {ListNode} list1 - The head of the first linked list.
 * @param {ListNode} list2 - The head of the second linked list.
 * @return {ListNode} - The head of the merged linked list.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
  
var mergeTwoLists = function(list1, list2) {
    // create a dummy node as the head of the merged list
    let dummy = new ListNode(0);
    let tail = dummy;
    
    // iterate through both lists until one of them is empty
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        // append the smaller node to the merged list
        tail.next = list1;
        // move to the next node in list1
        list1 = list1.next;
      } else {
        // append the smaller node to the merged list
        tail.next = list2;
        // move to the next node in list2
        list2 = list2.next;
      }
      // move the tail to the last node in the merged list
      tail = tail.next;
    }
    
    // append the remaining nodes of the non-empty list
    if (list1 !== null) {
      tail.next = list1;
    } else {
      tail.next = list2;
    }
    
    // return the head of the merged list (after the dummy node)
    return dummy.next;
  };
  
  // Example usage:
  // create two sorted linked lists
  let list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(4);
  
  let list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);
  
  // merge the two lists
  let mergedList = mergeTwoLists(list1, list2);
  
  // print the merged list
  let currentNode = mergedList;
  while (currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
  