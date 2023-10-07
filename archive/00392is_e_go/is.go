func isSubsequence(s string, t string) bool {
    // Preprocess t to find positions of each character
    positions := make(map[byte][]int)
    for i := 0; i < len(t); i++ {
        positions[t[i]] = append(positions[t[i]], i)
    }
    
    // Traverse through s to check if it is a subsequence of t
    j := -1
    for i := 0; i < len(s); i++ {
        if pos, ok := positions[s[i]]; ok {
            // Find the smallest position that is larger than j
            k := sort.Search(len(pos), func(k int) bool { return pos[k] > j })
            if k == len(pos) {
                return false
            }
            j = pos[k]
        } else {
            return false
        }
    }
    
    return true
}
