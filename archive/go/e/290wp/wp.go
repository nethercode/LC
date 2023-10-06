import "strings"

func wordPattern(pattern string, s string) bool {
    words := strings.Split(s, " ")
    if len(pattern) != len(words) {
        return false
    }
    
    patternToWord := make(map[byte]string)
    wordToPattern := make(map[string]byte)
    
    for i := 0; i < len(pattern); i++ {
        p := pattern[i]
        w := words[i]
        
        if prevWord, ok := patternToWord[p]; ok {
            if prevWord != w {
                return false
            }
        } else {
            patternToWord[p] = w
        }
        
        if prevPattern, ok := wordToPattern[w]; ok {
            if prevPattern != p {
                return false
            }
        } else {
            wordToPattern[w] = p
        }
    }
    
    return true
}
