func isIsomorphic(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }
    
    sMap := make(map[byte]byte)
    tMap := make(map[byte]byte)
    
    for i := 0; i < len(s); i++ {
        sChar := s[i]
        tChar := t[i]
        
        if sVal, ok := sMap[sChar]; ok {
            if sVal != tChar {
                return false
            }
        } else {
            sMap[sChar] = tChar
        }
        
        if tVal, ok := tMap[tChar]; ok {
            if tVal != sChar {
                return false
            }
        } else {
            tMap[tChar] = sChar
        }
    }
    
    return true
}
