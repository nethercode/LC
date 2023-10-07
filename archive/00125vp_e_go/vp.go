func isPalindrome(s string) bool {
    // Convert all letters to lowercase and remove non-alphanumeric characters
    var cleanStr []rune
    for _, r := range s {
        if unicode.IsLetter(r) || unicode.IsNumber(r) {
            cleanStr = append(cleanStr, unicode.ToLower(r))
        }
    }

    // Check if clean string is a palindrome
    for i, j := 0, len(cleanStr)-1; i < j; i, j = i+1, j-1 {
        if cleanStr[i] != cleanStr[j] {
            return false
        }
    }
    return true
}
