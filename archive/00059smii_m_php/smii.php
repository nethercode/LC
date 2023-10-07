class Solution {

/**
 * @param Integer $n
 * @return Integer[][]
 */
function generateMatrix($n) {
    $matrix = array();
    for ($i = 0; $i < $n; $i++) {
        $matrix[$i] = array();
        for ($j = 0; $j < $n; $j++) {
            $matrix[$i][$j] = 0;
        }
    }
    $num = 1;
    $top = 0;
    $bottom = $n - 1;
    $left = 0;
    $right = $n - 1;
    while ($num <= $n * $n) {
        for ($i = $left; $i <= $right; $i++) {
            $matrix[$top][$i] = $num++;
        }
        $top++;
        for ($i = $top; $i <= $bottom; $i++) {
            $matrix[$i][$right] = $num++;
        }
        $right--;
        for ($i = $right; $i >= $left; $i--) {
            $matrix[$bottom][$i] = $num++;
        }
        $bottom--;
        for ($i = $bottom; $i >= $top; $i--) {
            $matrix[$i][$left] = $num++;
        }
        $left++;
    }
    return $matrix;
}
}
