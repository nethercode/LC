import "unicode/utf8"

func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    freq := make(map[string]int)
    for i := 0; i < len(s); {
        r, size := utf8.DecodeRuneInString(s[i:])
        freq[string(r)]++
        i += size
    }

    for i := 0; i < len(t); {
        r, size := utf8.DecodeRuneInString(t[i:])
        freq[string(r)]--
        if freq[string(r)] < 0 {
            return false
        }
        i += size
    }

    for _, count := range freq {
        if count != 0 {
            return false
        }
    }

    return true
}
