class StockSpanner() {
    private val prices = mutableListOf<Pair<Int, Int>>()

    fun next(price: Int): Int {
        var span = 1

        while (prices.isNotEmpty() && prices.last().first <= price) {
            span += prices.last().second
            prices.removeAt(prices.lastIndex)
        }

        prices.add(Pair(price, span))
        return span
    }
}