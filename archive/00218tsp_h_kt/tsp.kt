import java.util.*

class Solution {
    fun getSkyline(buildings: Array<IntArray>): List<List<Int>> {
        val events = mutableListOf<Pair<Int, Int>>()
        for (building in buildings) {
            val (left, right, height) = building
            events.add(Pair(left, -height))
            events.add(Pair(right, height))
        }
        events.sortWith(compareBy({ it.first }, { it.second }))

        val active = PriorityQueue<Int>(compareByDescending { it })
        active.offer(0)

        var prevMaxHeight = 0
        val skyline = mutableListOf<List<Int>>()

        for (event in events) {
            val (x, h) = event
            if (h < 0) {
                active.offer(-h)
            } else {
                active.remove(h)
            }
            val currentMaxHeight = active.peek()
            if (currentMaxHeight != prevMaxHeight) {
                skyline.add(listOf(x, currentMaxHeight))
                prevMaxHeight = currentMaxHeight
            }
        }

        return skyline
    }
}
