class Solution {
    /**
     * @param String[][] $equations
     * @param Float[] $values
     * @param String[][] $queries
     * @return Float[]
     */
    function calcEquation($equations, $values, $queries) {
        // Step 1: Build the graph
        $graph = [];
        $n = count($equations);
        
        for ($i = 0; $i < $n; $i++) {
            [$numerator, $denominator] = $equations[$i];
            $value = $values[$i];
            
            // Add edges for both directions since the values are not necessarily symmetric
            $graph[$numerator][$denominator] = $value;
            $graph[$denominator][$numerator] = 1.0 / $value;
        }
        
        // Step 2: Perform queries
        $result = [];
        
        foreach ($queries as $query) {
            [$numerator, $denominator] = $query;
            $result[] = $this->dfs($numerator, $denominator, $graph, [], 1.0);
        }
        
        return $result;
    }
    
    /**
     * Depth-first search to find the ratio between two variables
     *
     * @param string $curr
     * @param string $target
     * @param array $graph
     * @param array $visited
     * @param float $curValue
     * @return float
     */
    function dfs($curr, $target, $graph, $visited, $curValue) {
        // If the current variable is not in the graph, or the target variable is not reachable from the current variable
        if (!isset($graph[$curr]) || !isset($graph[$target])) {
            return -1.0;
        }
        
        // If the current variable is the target variable, return the accumulated value
        if ($curr === $target) {
            return $curValue;
        }
        
        // Mark the current variable as visited
        $visited[$curr] = true;
        
        foreach ($graph[$curr] as $next => $value) {
            // If the next variable has not been visited, recursively explore the path
            if (!isset($visited[$next])) {
                $result = $this->dfs($next, $target, $graph, $visited, $curValue * $value);
                
                // If a valid ratio is found in the recursive call, return it
                if ($result !== -1.0) {
                    return $result;
                }
            }
        }
        
        // The target variable is not reachable from the current variable
        return -1.0;
    }
}
