class Solution {
    fun minFlips(a: Int, b: Int, c: Int): Int {
        var flips = 0
        var numA = a
        var numB = b
        var numC = c

        while (numA > 0 || numB > 0 || numC > 0) {
            val bitA = numA and 1
            val bitB = numB and 1
            val bitC = numC and 1

            if (bitC == 0) {
                if (bitA == 1 && bitB == 1)
                    flips += 2
                else if (bitA == 1 || bitB == 1)
                    flips += 1
            } else {
                if (bitA == 0 && bitB == 0)
                    flips += 1
            }

            numA = numA shr 1
            numB = numB shr 1
            numC = numC shr 1
        }

        return flips
    }
}
