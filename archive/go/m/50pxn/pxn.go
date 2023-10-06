func myPow(x float64, n int) float64 {
    if n == 0 {
        return 1.0
    }

    if n < 0 {
        x = 1 / x
        n = -n
    }

    half := myPow(x, n/2)
    result := half * half

    if n%2 == 1 {
        result *= x
    }

    return result
}
