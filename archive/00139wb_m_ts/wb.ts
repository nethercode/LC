function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length;
    const dp = new Array(n+1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j,i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}

// CLI output test
const s = "leetcode";
const wordDict = ["leet", "code"];
const result = wordBreak(s, wordDict);
console.log(`Can "${s}" be segmented into words from ${JSON.stringify(wordDict)}? ${result}`); // Expected output: true
