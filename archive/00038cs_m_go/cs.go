func countAndSay(n int) string {
    if n == 1 {
        return "1"
    }
    
    prev := countAndSay(n - 1)
    count := 1
    result := ""
    
    for i := 0; i < len(prev); i++ {
        if i < len(prev)-1 && prev[i] == prev[i+1] {
            count++
        } else {
            result += strconv.Itoa(count) + string(prev[i])
            count = 1
        }
    }
    
    return result
}