class Solution {
    fun countSmaller(nums: IntArray): List<Int> {
        val counts = IntArray(nums.size)
        val indices = IntArray(nums.size) { it }

        mergeSort(nums, indices, counts, 0, nums.size - 1)

        return counts.toList()
    }

    private fun mergeSort(nums: IntArray, indices: IntArray, counts: IntArray, start: Int, end: Int) {
        if (start >= end) return

        val mid = start + (end - start) / 2

        mergeSort(nums, indices, counts, start, mid)
        mergeSort(nums, indices, counts, mid + 1, end)

        merge(nums, indices, counts, start, mid, end)
    }

    private fun merge(nums: IntArray, indices: IntArray, counts: IntArray, start: Int, mid: Int, end: Int) {
        val merged = IntArray(end - start + 1)
        val mergedIndices = IntArray(end - start + 1)

        var left = start
        var right = mid + 1
        var count = 0
        var k = 0

        while (left <= mid && right <= end) {
            if (nums[indices[right]] < nums[indices[left]]) {
                merged[k] = indices[right]
                mergedIndices[k] = indices[right]
                count++
                right++
            } else {
                merged[k] = indices[left]
                mergedIndices[k] = indices[left]
                counts[indices[left]] += count
                left++
            }
            k++
        }

        while (left <= mid) {
            merged[k] = indices[left]
            mergedIndices[k] = indices[left]
            counts[indices[left]] += count
            left++
            k++
        }

        while (right <= end) {
            merged[k] = indices[right]
            mergedIndices[k] = indices[right]
            right++
            k++
        }

        for (i in merged.indices) {
            indices[start + i] = mergedIndices[i]
        }
    }
}
