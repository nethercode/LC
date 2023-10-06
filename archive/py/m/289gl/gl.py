from typing import List

class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        m = len(board)
        n = len(board[0])
        
        # Define the eight possible directions to check neighbors
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (-1, -1), (1, -1), (-1, 1)]
        
        for i in range(m):
            for j in range(n):
                live_neighbors = 0
                
                # Count live neighbors
                for dx, dy in directions:
                    if 0 <= i + dx < m and 0 <= j + dy < n and abs(board[i + dx][j + dy]) == 1:
                        live_neighbors += 1
                
                # Apply rules to determine the next state
                if board[i][j] == 1 and (live_neighbors < 2 or live_neighbors > 3):
                    # Cell dies in the next state
                    board[i][j] = -1
                elif board[i][j] == 0 and live_neighbors == 3:
                    # Cell becomes alive in the next state
                    board[i][j] = 2
        
        for i in range(m):
            for j in range(n):
                if board[i][j] > 0:
                    # Cell was alive or becomes alive
                    board[i][j] = 1
                else:
                    # Cell was dead or dies
                    board[i][j] = 0
