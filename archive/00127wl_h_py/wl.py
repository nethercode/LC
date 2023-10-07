from collections import defaultdict, deque
from typing import List

class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        # create the adjacency list
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0
        graph = defaultdict(list)
        for word in wordSet:
            for i in range(len(word)):
                pattern = word[:i] + '*' + word[i+1:]
                graph[pattern].append(word)
        
        # perform BFS
        visited = set()
        queue = deque([(beginWord, 1)])
        while queue:
            word, length = queue.popleft()
            if word == endWord:
                return length
            if word in visited:
                continue
            visited.add(word)
            for i in range(len(word)):
                pattern = word[:i] + '*' + word[i+1:]
                for neighbor in graph[pattern]:
                    if neighbor not in visited:
                        queue.append((neighbor, length+1))
        
        # we exhausted all the possible transformations without reaching the endWord
        return 0

# example usage
beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
solution = Solution()
length = solution.ladderLength(beginWord, endWord, wordList)
print(length)