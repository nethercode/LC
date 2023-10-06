from typing import List
from collections import defaultdict, deque

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Step 1: Create the graph
        graph = defaultdict(list)
        in_degree = [0] * numCourses
        
        for course, prereq in prerequisites:
            graph[prereq].append(course)
            in_degree[course] += 1
        
        # Step 2: Perform topological sorting
        queue = deque()
        
        for course in range(numCourses):
            if in_degree[course] == 0:
                queue.append(course)
        
        completed = 0
        
        while queue:
            node = queue.popleft()
            completed += 1
            
            for neighbor in graph[node]:
                in_degree[neighbor] -= 1
                
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)
        
        return completed == numCourses

# Example usage
numCourses = 4
prerequisites = [[1,0],[2,1],[3,2],[1,3]]
sol = Solution()
print(sol.canFinish(numCourses, prerequisites)) # Output: False
