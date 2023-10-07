function decodeString(s: string): string {
    const stack: string[] = [];
    for (const c of s) {
      if (c !== ']') {
        stack.push(c);
      } else {
        let substr = '';
        while (stack[stack.length - 1] !== '[') {
          substr = stack.pop() + substr;
        }
        stack.pop(); // Pop '['
        let factor = '';
        while (stack.length > 0 && /\d/.test(stack[stack.length - 1])) {
          factor = stack.pop() + factor;
        }
        const repeat = parseInt(factor, 10);
        const decoded = substr.repeat(repeat);
        stack.push(decoded);
      }
    }
    return stack.join('');
  }
  