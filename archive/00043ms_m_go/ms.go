func multiply(num1 string, num2 string) string {
    n1 := len(num1)
    n2 := len(num2)
    result := make([]int, n1+n2)

    for i := n1 - 1; i >= 0; i-- {
        for j := n2 - 1; j >= 0; j-- {
            digit1 := int(num1[i] - '0')
            digit2 := int(num2[j] - '0')

            pos1 := i + j
            pos2 := i + j + 1
            product := digit1 * digit2 + result[pos2]

            result[pos1] += product / 10
            result[pos2] = product % 10
        }
    }

    sb := strings.Builder{}
    for _, digit := range result {
        if !(len(sb.String()) == 0 && digit == 0) {
            sb.WriteString(strconv.Itoa(digit))
        }
    }

    if sb.Len() == 0 {
        return "0"
    }

    return sb.String()
}