class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  var addTwoNumbers = function(l1, l2) {
      let carry = 0;
      let sum = 0;
      let result = new ListNode(0);
      let currentNode = result;
      
      while (l1 || l2) {
          sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
          carry = Math.floor(sum / 10);
          currentNode.next = new ListNode(sum % 10);
          currentNode = currentNode.next;
          l1 = l1 ? l1.next : null;
          l2 = l2 ? l2.next : null;
      }
      
      if (carry > 0) {
          currentNode.next = new ListNode(carry);
      }
      
      return result.next;
  };
  
  // Define two linked lists
  let l1 = new ListNode(5);
  l1.next = new ListNode(3);
  l1.next.next = new ListNode(5);
  
  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  // Call addTwoNumbers function with the two lists as arguments
  let result = addTwoNumbers(l1, l2);
  
  // Print the result
  let output = "";
  while (result) {
  output = result.val + output;
  result = result.next;
  }
  console.log(parseInt(output).toLocaleString('en-US'));
  