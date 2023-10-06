var minWindow = function(s, t) {
    const charCount = {};
    for (let c of t) {
      if (charCount[c]) {
        charCount[c]++;
      } else {
        charCount[c] = 1;
      }
    }
    
    let left = 0, right = 0;
    let count = t.length;
    let minLen = Infinity, minStart = 0, minEnd = 0;
    
    while (right < s.length) {
      if (charCount[s[right]] > 0) {
        count--;
      }
      charCount[s[right]]--;
      right++;
      
      while (count === 0) {
        if (right - left < minLen) {
          minLen = right - left;
          minStart = left;
          minEnd = right;
        }
        
        if (charCount[s[left]] === 0) {
          count++;
        }
        charCount[s[left]]++;
        left++;
      }
    }
    
    return minLen === Infinity ? "" : s.substring(minStart, minEnd);
  };

  const s = "ADOBECODEBANC";
  const t = "ABC";
  const minWindowSubstring = minWindow(s, t);
  console.log(minWindowSubstring); // "BANC"
  