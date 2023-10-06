class Solution {
    fun canVisitAllRooms(rooms: List<List<Int>>): Boolean {
        val n = rooms.size
        val visited = BooleanArray(n) // Keep track of visited rooms
        visited[0] = true // Room 0 is initially visited
        dfs(rooms, 0, visited) // Start DFS from room 0
        
        // Check if all rooms have been visited
        for (v in visited) {
            if (!v) {
                return false
            }
        }
        
        return true
    }
    
    private fun dfs(rooms: List<List<Int>>, room: Int, visited: BooleanArray) {
        for (key in rooms[room]) {
            if (!visited[key]) {
                visited[key] = true
                dfs(rooms, key, visited)
            }
        }
    }
}
