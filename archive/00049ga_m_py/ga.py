from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_groups = {}
        for s in strs:
            sorted_s = ''.join(sorted(s))
            if sorted_s in anagram_groups:
                anagram_groups[sorted_s].append(s)
            else:
                anagram_groups[sorted_s] = [s]
        return list(anagram_groups.values())

# Example usage
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
sol = Solution()
result = sol.groupAnagrams(strs)
print(result)
