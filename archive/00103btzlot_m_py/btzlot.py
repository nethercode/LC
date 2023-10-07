from typing import List
from collections import deque

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        result = []
        queue = deque([root])
        level = 0  # to keep track of the current level

        while queue:
            level_values = []  # to store the node values of the current level
            level_size = len(queue)

            for _ in range(level_size):
                node = queue.popleft()
                level_values.append(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            if level % 2 == 1:
                level_values.reverse()  # reverse the order for odd levels

            result.append(level_values)
            level += 1

        return result
