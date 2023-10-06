func isBipartite(graph [][]int) bool {
    n := len(graph)
    colors := make([]int, n) // Array to store the color of each node
    queue := make([]int, 0)  // Queue for BFS traversal

    for i := 0; i < n; i++ {
        if colors[i] != 0 { // Node already colored
            continue
        }

        colors[i] = 1 // Assign the first color to the current node
        queue = append(queue, i)

        for len(queue) > 0 {
            node := queue[0]
            queue = queue[1:]

            for _, neighbor := range graph[node] {
                if colors[neighbor] == 0 { // Neighbor not colored yet
                    colors[neighbor] = -colors[node] // Assign opposite color to the neighbor
                    queue = append(queue, neighbor)
                } else if colors[neighbor] == colors[node] { // Neighbor has the same color
                    return false
                }
            }
        }
    }

    return true
}