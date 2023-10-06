class Solution {
    /**
     * @param Integer $numCourses
     * @param Integer[][] $prerequisites
     * @return Integer[]
     */
    function findOrder($numCourses, $prerequisites) {
        $adjList = array_fill(0, $numCourses, []);
        $inDegrees = array_fill(0, $numCourses, 0);
        
        foreach ($prerequisites as $prerequisite) {
            $course = $prerequisite[0];
            $prereq = $prerequisite[1];
            $adjList[$prereq][] = $course;
            $inDegrees[$course]++;
        }
        
        $queue = new SplQueue();
        for ($i = 0; $i < $numCourses; $i++) {
            if ($inDegrees[$i] === 0) {
                $queue->enqueue($i);
            }
        }
        
        $output = [];
        while (!$queue->isEmpty()) {
            $course = $queue->dequeue();
            $output[] = $course;
            
            foreach ($adjList[$course] as $neighbor) {
                $inDegrees[$neighbor]--;
                if ($inDegrees[$neighbor] === 0) {
                    $queue->enqueue($neighbor);
                }
            }
        }
        
        return count($output) === $numCourses ? $output : [];
    }
}
