class Solution {
    /**
     * @param TreeNode $root
     * @return Float[]
     */
    function averageOfLevels($root) {
        $averages = array(); // Array to store the averages of each level
        $queue = array($root); // Initialize the queue with the root node
        
        while (!empty($queue)) {
            $levelSum = 0; // Sum of values at current level
            $levelCount = count($queue); // Number of nodes at current level
            
            // Process all nodes at the current level
            for ($i = 0; $i < $levelCount; $i++) {
                $node = array_shift($queue); // Remove the front node from the queue
                $levelSum += $node->val; // Add the value to the level sum
                
                // Add the left and right child nodes to the queue if they exist
                if ($node->left != null) {
                    array_push($queue, $node->left);
                }
                if ($node->right != null) {
                    array_push($queue, $node->right);
                }
            }
            
            $levelAverage = $levelSum / $levelCount; // Calculate the average for the current level
            array_push($averages, $levelAverage); // Add the average to the result array
        }
        
        return $averages;
    }
}