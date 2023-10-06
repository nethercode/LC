func findItinerary(tickets [][]string) []string {
    // Build a graph to represent the flights
    graph := make(map[string][]string)
    for _, ticket := range tickets {
        from, to := ticket[0], ticket[1]
        graph[from] = append(graph[from], to)
    }

    // Sort the destinations in lexical order
    for _, destinations := range graph {
        sort.Strings(destinations)
    }

    // Perform a depth-first search to find the itinerary
    var itinerary []string
    dfs("JFK", &itinerary, graph)

    // Reverse the itinerary to get the correct order
    reverse(itinerary)

    return itinerary
}

func dfs(node string, itinerary *[]string, graph map[string][]string) {
    for len(graph[node]) > 0 {
        next := graph[node][0]
        graph[node] = graph[node][1:]
        dfs(next, itinerary, graph)
    }
    *itinerary = append(*itinerary, node)
}

func reverse(arr []string) {
    i := 0
    j := len(arr) - 1
    for i < j {
        arr[i], arr[j] = arr[j], arr[i]
        i++
        j--
    }
}