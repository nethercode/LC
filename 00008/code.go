import (
	"math"
	"strings"
)

func myAtoi(s string) int {
	s = strings.TrimSpace(s)
	if s == "" {
		return 0
	}

	sign := 1
	i := 0

	if s[i] == '+' {
		i++
	} else if s[i] == '-' {
		sign = -1
		i++
	}

	num := 0

	for ; i < len(s); i++ {
		if s[i] < '0' || s[i] > '9' {
			break
		}
		num = num*10 + int(s[i]-'0')

		if num > math.MaxInt32 {
			if sign == 1 {
				return math.MaxInt32
			}
			return math.MinInt32
		}
	}

	return num * sign
}