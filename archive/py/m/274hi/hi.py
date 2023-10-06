from typing import List

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        citations.sort()  # Sort the citations array in non-decreasing order
        n = len(citations)
        h = 0

        for i in range(n):
            curr_h = min(citations[i], n - i)
            h = max(h, curr_h)

        return h
