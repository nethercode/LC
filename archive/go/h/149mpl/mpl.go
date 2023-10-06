func maxPoints(points [][]int) int {
    if len(points) <= 2 {
        return len(points)
    }
    
    maxCount := 0
    for i := 0; i < len(points); i++ {
        counts := make(map[[2]int]int)
        overlapCount := 1
        for j := i+1; j < len(points); j++ {
            dx, dy := points[j][0]-points[i][0], points[j][1]-points[i][1]
            if dx == 0 && dy == 0 {
                overlapCount++
                continue
            }
            gcd := GCD(dx, dy)
            slope := [2]int{dx/gcd, dy/gcd}
            counts[slope]++
        }
        localMax := overlapCount
        for _, count := range counts {
            if count+overlapCount > localMax {
                localMax = count+overlapCount
            }
        }
        if localMax > maxCount {
            maxCount = localMax
        }
    }
    return maxCount
}

func GCD(a, b int) int {
    if b == 0 {
        return a
    }
    return GCD(b, a%b)
}
