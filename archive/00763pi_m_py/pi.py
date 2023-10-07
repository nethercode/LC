from typing import List

class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last_index = {char: idx for idx, char in enumerate(s)}
        start = end = 0
        result = []
        for idx, char in enumerate(s):
            end = max(end, last_index[char])
            if idx == end:
                result.append(end-start+1)
                start = end+1
        return result

def get_partition_sizes(s: str) -> None:
    sol = Solution()
    partition_sizes = sol.partitionLabels(s)
    print(partition_sizes)

# Example usage:
get_partition_sizes("ababcbacadefegdehijhklij")
# Output: [9, 7, 8]
