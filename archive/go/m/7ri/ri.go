func reverse(x int) int {
    const INT_MAX = int(^uint32(0) >> 1)
    const INT_MIN = ^INT_MAX

    var reversed int

    for x != 0 {
        reversed = reversed*10 + x%10
        x /= 10
    }

    if reversed > INT_MAX || reversed < INT_MIN {
        return 0
    }

    return reversed
}