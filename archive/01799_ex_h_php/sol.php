class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxScore($nums) {
        $n = count($nums) / 2;
        $memo = array();

        return $this->maxScoreRecursive($nums, $n, 1, $memo);
    }

    function maxScoreRecursive($nums, $n, $i, &$memo) {
        if ($n == 0) {
            return 0; // No more operations, return 0 as the base case.
        }

        $key = implode(',', $nums) . '-' . $i;
        if (isset($memo[$key])) {
            return $memo[$key]; // Return the memoized result if available.
        }

        $maxScore = 0;

        for ($j = 0; $j < count($nums) - 1; $j++) {
            for ($k = $j + 1; $k < count($nums); $k++) {
                $x = $nums[$j];
                $y = $nums[$k];
                $gcd = $this->gcd($x, $y);
                $score = $i * $gcd;

                $newNums = array_merge(array_slice($nums, 0, $j), array_slice($nums, $j + 1, $k - $j - 1), array_slice($nums, $k + 1));

                $maxScore = max($maxScore, $score + $this->maxScoreRecursive($newNums, $n - 1, $i + 1, $memo));
            }
        }

        $memo[$key] = $maxScore; // Memoize the result.
        return $maxScore;
    }

    function gcd($x, $y) {
        if ($y === 0) {
            return $x;
        }
        return $this->gcd($y, $x % $y);
    }
}