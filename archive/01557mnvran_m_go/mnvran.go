func findSmallestSetOfVertices(n int, edges [][]int) (res []int) {
	const (
		from = iota
		to
	)
	incoming := make([]bool, n)
	for _, edge := range edges {
		incoming[edge[to]] = true
	}
	for i, exist := range incoming {
		if !exist {
			res = append(res, i)
		}
	}
	return res
}