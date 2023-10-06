var reverseKGroup = function(head, k) {
    if (!head || k == 1) return head; // edge cases
    
    let count = 0;
    let curr = head;
    while (curr) { // count the number of nodes
        count++;
        curr = curr.next;
    }
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    curr = head;
    for (let i = 0; i < Math.floor(count / k); i++) { // iterate through each group of k nodes
        for (let j = 1; j < k; j++) { // reverse the nodes in the current group
            let next = curr.next;
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }
        prev = curr;
        curr = curr.next;
    }
    
    return dummy.next;
};

class ListNode {
    constructor(val, next) {
      this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
    }
  }  

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
let node7 = new ListNode(7);
let node8 = new ListNode(8);
let node9 = new ListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;

let reversed = reverseKGroup(node1, 3);

console.log(reversed); // The output will be: 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 9 -> 8 -> 7
