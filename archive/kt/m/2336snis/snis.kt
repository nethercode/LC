class SmallestInfiniteSet() {
    private var maxEverPopped = 0
    private var sortedAddedBack = sortedSetOf<Int>()

    fun popSmallest(): Int {
        if (sortedAddedBack.isEmpty() || sortedAddedBack.first() > maxEverPopped) {
            maxEverPopped++
            return maxEverPopped
        } else {
            val smallest = sortedAddedBack.first()
            sortedAddedBack.remove(smallest)
            return smallest
        }
    }

    fun addBack(num: Int) {
        if (num <= maxEverPopped && num !in sortedAddedBack) {
            sortedAddedBack.add(num)
        }
    }
}
