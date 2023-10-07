// go run .\h\1192ccn\ccn.go 4 0,1 1,2 2,3 1,3

package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go n connections")
		os.Exit(1)
	}
	n, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("Invalid value for n:", os.Args[1])
		os.Exit(1)
	}
	connectionsStr := os.Args[2:]
	if len(connectionsStr) < n-1 {
		fmt.Println("Insufficient number of connections")
		os.Exit(1)
	}
	connections := make([][]int, len(connectionsStr))
	for i, connStr := range connectionsStr {
		connParts := strings.Split(connStr, ",")
		if len(connParts) != 2 {
			fmt.Println("Invalid connection format:", connStr)
			os.Exit(1)
		}
		u, err := strconv.Atoi(connParts[0])
		if err != nil {
			fmt.Println("Invalid value for u in connection", connStr)
			os.Exit(1)
		}
		v, err := strconv.Atoi(connParts[1])
		if err != nil {
			fmt.Println("Invalid value for v in connection", connStr)
			os.Exit(1)
		}
		connections[i] = []int{u, v}
	}
	bridges := criticalConnections(n, connections)
	fmt.Println(bridges)
}

func criticalConnections(n int, connections [][]int) [][]int {
	graph := make([][]int, n)
	for _, conn := range connections {
		u, v := conn[0], conn[1]
		graph[u] = append(graph[u], v)
		graph[v] = append(graph[v], u)
	}

	ids := make([]int, n)
	lows := make([]int, n)
	visited := make([]bool, n)
	bridges := [][]int{}
	var dfs func(int, int, int)
	dfs = func(node int, parent int, id int) {
		visited[node] = true
		ids[node] = id
		lows[node] = id
		for _, nei := range graph[node] {
			if nei == parent {
				continue
			}
			if !visited[nei] {
				id += 1
				dfs(nei, node, id)
				lows[node] = min(lows[node], lows[nei])
				if lows[nei] > ids[node] {
					bridges = append(bridges, []int{node, nei})
				}
			} else {
				lows[node] = min(lows[node], ids[nei])
			}
		}
	}

	id := 0
	for i, vis := range visited {
		if !vis {
			id += 1
			dfs(i, -1, id)
		}
	}
	return bridges
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
