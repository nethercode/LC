class Solution {
    /**
     * @param String $path
     * @return String
     */
    function simplifyPath($path) {
        $components = explode('/', $path); // Split the path into components
        $stack = []; // Stack to store the valid directories
        
        foreach ($components as $component) {
            if ($component === '' || $component === '.') {
                continue; // Ignore empty components and '.'
            } elseif ($component === '..') {
                array_pop($stack); // Go up one directory by popping from the stack
            } else {
                $stack[] = $component; // Push valid directory names onto the stack
            }
        }
        
        $canonicalPath = '/' . implode('/', $stack); // Join the stack components with '/'
        return $canonicalPath;
    }
}