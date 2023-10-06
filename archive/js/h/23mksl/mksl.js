var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    if (lists.length === 2) {
        return mergeTwoLists(lists[0], lists[1]);
    }
    const mid = Math.floor(lists.length / 2);
    const left = lists.slice(0, mid);
    const right = lists.slice(mid);
    return mergeTwoLists(mergeKLists(left), mergeKLists(right));
};

var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Example usage
const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
const list3 = new ListNode(2, new ListNode(6, null));

const mergedList = mergeKLists([list1, list2, list3]);

let output = '';
let curr = mergedList;
while (curr) {
  output += curr.val + ' -> ';
  curr = curr.next;
}
output += 'null';

console.log(output);  // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 6 -> null
