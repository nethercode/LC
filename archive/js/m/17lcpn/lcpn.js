var letterCombinations = function(digits) {
    const digitMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    const result = [];
    if (digits === "") {
        return result;
    }
    const dfs = (current, nextDigits) => {
        if (nextDigits.length === 0) {
            result.push(current);
        } else {
            const letters = digitMap[nextDigits[0]];
            for (let i = 0; i < letters.length; i++) {
                dfs(current + letters[i], nextDigits.substring(1));
            }
        }
    }
    dfs("", digits);
    return result;
};

console.log(letterCombinations('369'));
