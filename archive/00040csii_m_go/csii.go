func combinationSum2(candidates []int, target int) [][]int {
    var results [][]int
    var current []int
    sort.Ints(candidates)
    backtrack(candidates, target, 0, current, &results)
    return results
}

func backtrack(candidates []int, target, start int, current []int, results *[][]int) {
    if target == 0 {
        *results = append(*results, append([]int{}, current...))
        return
    }
    for i := start; i < len(candidates); i++ {
        if i > start && candidates[i] == candidates[i-1] {
            continue
        }
        if candidates[i] > target {
            break
        }
        current = append(current, candidates[i])
        backtrack(candidates, target-candidates[i], i+1, current, results)
        current = current[:len(current)-1]
    }
}