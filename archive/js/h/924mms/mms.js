function dfs(graph, visited, node, initial) {
    visited[node] = true;
    let count = 1;
    for (let i = 0; i < graph.length; i++) {
        if (graph[node][i] == 1 && !visited[i] && !initial.includes(i)) {
            count += dfs(graph, visited, i, initial);
        }
    }
    return count;
}

var minMalwareSpread = function(graph, initial) {
    initial.sort((a, b) => a - b);
    let minIndex = initial[0];
    let minCount = Infinity;
    for (let i = 0; i < initial.length; i++) {
        let infected = [...initial];
        infected.splice(i, 1);
        let visited = new Array(graph.length).fill(false);
        let count = 0;
        for (let node of infected) {
            if (!visited[node]) {
                count += dfs(graph, visited, node, infected);
            }
        }
        if (count < minCount || (count == minCount && initial[i] < minIndex)) {
            minIndex = initial[i];
            minCount = count;
        }
    }
    return minIndex;
};

const graph = [[1,0,0,0],[0,1,0,0],[0,0,1,1],[0,0,1,1]];
const initial = [0, 1];
const minMalware = minMalwareSpread(graph, initial);
console.log(`The index of the node to remove for minimum malware spread is ${minMalware}`);