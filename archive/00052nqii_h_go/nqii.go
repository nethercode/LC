func totalNQueens(n int) int {
    var count int
    cols := make(map[int]bool)
    diag1 := make(map[int]bool)
    diag2 := make(map[int]bool)
    backtrack(0, n, cols, diag1, diag2, &count)
    return count
}

func backtrack(row, n int, cols, diag1, diag2 map[int]bool, count *int) {
    if row == n {
        (*count)++
        return
    }
    for col := 0; col < n; col++ {
        if cols[col] || diag1[row-col] || diag2[row+col] {
            continue
        }
        cols[col] = true
        diag1[row-col] = true
        diag2[row+col] = true
        backtrack(row+1, n, cols, diag1, diag2, count)
        cols[col] = false
        diag1[row-col] = false
        diag2[row+col] = false
    }
}
