var generateParenthesis = function(n) {
    const results = [];
  
    function backtrack(str, open, close) {
      if (str.length === 2 * n) {
        results.push(str);
        return;
      }
  
      if (open < n) {
        backtrack(str + '(', open + 1, close);
      }
  
      if (close < open) {
        backtrack(str + ')', open, close + 1);
      }
    }
  
    backtrack('', 0, 0);
  
    return results;
  };

console.log(generateParenthesis(3));