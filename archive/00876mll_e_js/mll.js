var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

/*
// create linked list
let head = {val: 1, next: null};
head.next = {val: 2, next: null};
head.next.next = {val: 3, next: null};
head.next.next.next = {val: 4, next: null};
head.next.next.next.next = {val: 5, next: null};
// find middle
let middle = middleNode(head);
console.log(middle.val);
*/
