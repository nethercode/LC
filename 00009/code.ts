function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    let reversed = 0;
    let remaining = x;

    while (remaining > 0) {
        const digit = remaining % 10;
        reversed = reversed * 10 + digit;
        remaining = Math.floor(remaining / 10);
    }

    return x == reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
