var canConstruct = function(ransomNote, magazine) {
    let charCounts = {};
    
    // count frequency of each character
    for (let char of magazine) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    
    // iterate through characters and decrement the count for each in hash table
    for (let char of ransomNote) {
        if (!charCounts[char]) {
            return false;
        }
        charCounts[char]--;
        if (charCounts[char] < 0) {
            return false;
        }
    }
    
    return true;
};

/*
const ransomNote = "aabbcc";
const magazine = "aaabbbccc";
const expectedOutput = true;
const output = canConstruct(ransomNote, magazine);
console.log(output === expectedOutput ? "Test passed" : "Test failed");
*/