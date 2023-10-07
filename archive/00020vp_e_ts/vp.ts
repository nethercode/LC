function isValid(s: string): boolean {
    const stack: string[] = [];
    const openBrackets = ['(', '[', '{'];
    const closeBrackets = [')', ']', '}'];
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
  
      if (openBrackets.includes(c)) {
        stack.push(c);
      } else if (closeBrackets.includes(c)) {
        const matchingOpenBracket = openBrackets[closeBrackets.indexOf(c)];
        if (stack.pop() !== matchingOpenBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage
  const input = "(())[]{}";
  const result = isValid(input);
  