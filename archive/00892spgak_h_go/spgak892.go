func shortestPathAllKeys(grid []string) int {
    m, n := len(grid), len(grid[0])
    start, keysCount := -1, 0
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == '@' {
                start = i*n + j
            }
            if 'a' <= grid[i][j] && grid[i][j] <= 'f' {
                keysCount++
            }
        }
    }
    target := 1<<keysCount - 1
    type state struct{ i, j, keys int }
    queue := []state{{start / n, start % n, 0}}
    seen := make(map[state]bool)
    seen[queue[0]] = true
    var steps int
    for len(queue) > 0 {
        size := len(queue)
        for i := 0; i < size; i++ {
            curr := queue[i]
            if curr.keys == target {
                return steps
            }
            for _, dir := range [][2]int{{-1, 0}, {0, -1}, {1, 0}, {0, 1}} {
                ni, nj := curr.i+dir[0], curr.j+dir[1]
                if ni < 0 || ni >= m || nj < 0 || nj >= n || grid[ni][nj] == '#' {
                    continue
                }
                nxt := state{ni, nj, curr.keys}
                if 'A' <= grid[ni][nj] && grid[ni][nj] <= 'F' {
                    if curr.keys&(1<<(grid[ni][nj]-'A')) == 0 {
                        continue
                    }
                }
                if 'a' <= grid[ni][nj] && grid[ni][nj] <= 'f' {
                    nxt.keys |= 1 << (grid[ni][nj] - 'a')
                }
                if seen[nxt] {
                    continue
                }
                seen[nxt] = true
                queue = append(queue, nxt)
            }
        }
        queue = queue[size:]
        steps++
    }
    return -1
}
