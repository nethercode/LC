class Solution {
    /**
     * @param Node $root
     * @return Node
     */
    public function connect($root) {
        if ($root === null) {
            return null;
        }
        
        $queue = new SplQueue();
        $queue->enqueue($root);
        
        while (!$queue->isEmpty()) {
            $size = $queue->count();
            
            for ($i = 0; $i < $size; $i++) {
                $node = $queue->dequeue();
                
                if ($i < $size - 1) {
                    $node->next = $queue->bottom();
                }
                
                if ($node->left !== null) {
                    $queue->enqueue($node->left);
                }
                
                if ($node->right !== null) {
                    $queue->enqueue($node->right);
                }
            }
        }
        
        return $root;
    }
}