class Solution {
    /**
     * @param Node $node
     * @return Node
     */
    function cloneGraph($node) {
        if ($node === null) {
            return null;
        }
        
        $visited = array();
        $cloneMap = array();
        
        // Create a clone of the start node
        $cloneNode = new Node($node->val);
        $visited[$node->val] = true;
        $cloneMap[$node->val] = $cloneNode;
        
        // Perform DFS to clone the graph
        $this->dfs($node, $visited, $cloneMap);
        
        return $cloneNode;
    }
    
    private function dfs($node, &$visited, &$cloneMap) {
        foreach ($node->neighbors as $neighbor) {
            if (!isset($visited[$neighbor->val])) {
                // If the neighbor hasn't been visited, clone it and mark it as visited
                $cloneNeighbor = new Node($neighbor->val);
                $visited[$neighbor->val] = true;
                $cloneMap[$neighbor->val] = $cloneNeighbor;
                
                // Add the clone to the current node's neighbors
                $cloneMap[$node->val]->neighbors[] = $cloneNeighbor;
                
                // Recursively clone the neighbor's neighbors
                $this->dfs($neighbor, $visited, $cloneMap);
            } else {
                // If the neighbor has been visited, add its clone to the current node's neighbors
                $cloneMap[$node->val]->neighbors[] = $cloneMap[$neighbor->val];
            }
        }
    }
}