function isPalindrome(x: number): boolean {
    // Negative integers are not palindromes, because they have a '-' sign at the front.
    // Also, if the last digit of x is 0, then x cannot be a palindrome, because the first digit must be non-zero.
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    let reversed = 0;
    let remaining = x;

    // Reversing the number
    while (remaining > 0) {
        const digit = remaining % 10;
        reversed = reversed * 10 + digit;
        remaining = Math.floor(remaining / 10);
    }

    // If the reversed number is the same as the original number, then x is a palindrome.
    return x == reversed;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false
