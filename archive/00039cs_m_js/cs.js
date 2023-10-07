var combinationSum = function(candidates, target) {
    const result = [];
    
    const backtrack = (combination, start, remaining) => {
      if (remaining === 0) {
        result.push([...combination]);
        return;
      }
      
      for (let i = start; i < candidates.length; i++) {
        if (candidates[i] > remaining) {
          break;
        }
        
        combination.push(candidates[i]);
        backtrack(combination, i, remaining - candidates[i]);
        combination.pop();
      }
    };
    
    candidates.sort((a, b) => a - b);
    backtrack([], 0, target);
    
    return result;
  };

console.log(combinationSum(candidates = [2,3,6,7], target = 7));