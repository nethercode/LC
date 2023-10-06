function romanToInt(s) {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let currentValue = romanValues[s[i]];
    let nextValue = romanValues[s[i+1]];

    if (nextValue && nextValue > currentValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }

  return result;
}

let romanIn = "MCXI";
let arabicOut = romanToInt(romanIn);
console.log(arabicOut);