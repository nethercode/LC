var permute = function(nums) {
    const result = [];
    
    const generatePermutations = (permutation, remaining) => {
        if (remaining.length === 0) {
            result.push(permutation);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
                const newPermutation = [...permutation, remaining[i]];
                generatePermutations(newPermutation, newRemaining);
            }
        }
    }
    
    generatePermutations([], nums);
    return result;
};

console.log(permute([1,2,3]));