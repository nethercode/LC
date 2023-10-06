import java.util.*

class Solution {
    fun totalCost(costs: IntArray, k: Int, candidates: Int): Long {
        val pq1 = PriorityQueue<Int>()
        val pq2 = PriorityQueue<Int>()

        var i = 0
        var j = costs.size - 1
        while (i < candidates) {
            pq1.offer(costs[i])
            i++
        }
        while (j >= i && pq2.size < candidates) {
            pq2.offer(costs[j])
            j--
        }

        var total: Long = 0
        var kCount = k
        while (kCount > 0) {
            if (pq2.isEmpty() || (!pq1.isEmpty() && pq1.peek() <= pq2.peek())) {
                total += pq1.poll()
                if (i <= j) pq1.offer(costs[i++])
            } else if (pq1.isEmpty() || (!pq2.isEmpty() && pq2.peek() < pq1.peek())) {
                total += pq2.poll()
                if (i <= j) pq2.offer(costs[j--])
            }
            kCount--
        }
        return total
    }
}
