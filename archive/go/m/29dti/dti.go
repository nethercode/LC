func divide(dividend int, divisor int) int {
    if divisor == 0 {
        panic("Divisor cannot be 0")
    }

    if dividend == math.MinInt32 && divisor == -1 {
        return math.MaxInt32
    }

    sign := 1
    if (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) {
        sign = -1
    }

    dividend = abs(dividend)
    divisor = abs(divisor)

    quotient := 0
    for dividend >= divisor {
        multiple := 1
        multipleDivisor := divisor
        for (multipleDivisor << 1) <= dividend {
            multiple <<= 1
            multipleDivisor <<= 1
        }

        dividend -= multipleDivisor
        quotient += multiple
    }

    return sign * quotient
}

func abs(n int) int {
    if n < 0 {
        return -n
    }
    return n
}