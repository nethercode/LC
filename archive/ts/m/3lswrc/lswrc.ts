function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set();
    let i = 0, j = 0, maxLen = 0;

    while (j < s.length) {
        if (!charSet.has(s[j])) {
            charSet.add(s[j++]);
            maxLen = Math.max(maxLen, j - i);
        } else {
            charSet.delete(s[i++]);
        }
    }

    return maxLen;
}
