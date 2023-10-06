var partition = function(s) {
    const result = [];
    const memo = new Map();
    
    function backtrack(start, partition) {
        if (start === s.length) {
            result.push(partition.slice());
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(start, end)) {
                partition.push(s.substring(start, end+1));
                backtrack(end+1, partition);
                partition.pop();
            }
        }
    }
    
    function isPalindrome(start, end) {
        if (start === end) {
            return true;
        }
        
        const key = start + "," + end;
        if (memo.has(key)) {
            return memo.get(key);
        }
        
        if (s[start] !== s[end]) {
            memo.set(key, false);
            return false;
        }
        
        if (end - start <= 2) {
            memo.set(key, true);
            return true;
        }
        
        const isPalin = isPalindrome(start+1, end-1);
        memo.set(key, isPalin);
        return isPalin;
    }
    
    backtrack(0, []);
    return result;
};

console.log(partition("kayaking"));