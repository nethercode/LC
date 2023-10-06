var isPalindrome = function(head) {
    // edge case: if empty list or single node list then true
    if (!head || !head.next) {
        return true;
    }
    
    // find list middle using slow-fast technique
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // reverse the second half of list
    let prev = null;
    let curr = slow.next;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    // compare reversed second half of the list with the first list half
    let p1 = head;
    let p2 = prev;
    while (p2) {
        if (p1.val !== p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return true;
};

/*
let testWord = "rotator";
let testOutput = isPalindrome(testWord);
console.log(testOutput);
*/