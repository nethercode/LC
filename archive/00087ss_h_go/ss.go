func isScramble(s1 string, s2 string) bool {
    if s1 == s2 {
        return true
    }

    // Create a memoization map to store results
    memo := make(map[string]bool)

    return scrambleHelper(s1, s2, memo)
}

func scrambleHelper(s1 string, s2 string, memo map[string]bool) bool {
    key := s1 + "-" + s2
    if val, ok := memo[key]; ok {
        return val
    }

    if s1 == s2 {
        memo[key] = true
        return true
    }

    // Check if the character counts differ
    count := make([]int, 26) // Assuming only lowercase English letters
    for i := 0; i < len(s1); i++ {
        count[s1[i]-'a']++
        count[s2[i]-'a']--
    }
    for i := 0; i < 26; i++ {
        if count[i] != 0 {
            memo[key] = false
            return false
        }
    }

    // Try all possible splits and recursive calls
    for i := 1; i < len(s1); i++ {
        if (scrambleHelper(s1[:i], s2[:i], memo) && scrambleHelper(s1[i:], s2[i:], memo)) ||
            (scrambleHelper(s1[:i], s2[len(s2)-i:], memo) && scrambleHelper(s1[i:], s2[:len(s2)-i], memo)) {
            memo[key] = true
            return true
        }
    }

    memo[key] = false
    return false
}
