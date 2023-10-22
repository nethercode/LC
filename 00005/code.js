/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    const dp = Array(n).fill().map(() => Array(n).fill(false));
    let longest = '';
    
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        longest = s[i];
    }
    
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                if (len === 2 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    if (len > longest.length) {
                        longest = s.substring(i, j + 1);
                    }
                }
            }
        }
    }
    
    return longest;
};

const input = "babad";
const output = longestPalindrome(input);
console.log(`Input: ${input}`);
console.log(`Output: ${output}`);
