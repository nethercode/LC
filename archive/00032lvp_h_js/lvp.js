var longestValidParentheses = function(s) {
    let stack = [-1]; // Initialize stack with a dummy value
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length == 0) {
                // No more matching parentheses found
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLen;
};

let inp = ")()())";

console.log(longestValidParentheses(inp));