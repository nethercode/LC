from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [set() for _ in range(9)]
        columns = [set() for _ in range(9)]
        boxes = [[set() for _ in range(3)] for _ in range(3)]

        for i in range(9):
            for j in range(9):
                cell = board[i][j]
                if cell == '.':
                    continue

                if cell in rows[i] or cell in columns[j] or cell in boxes[i // 3][j // 3]:
                    return False

                rows[i].add(cell)
                columns[j].add(cell)
                boxes[i // 3][j // 3].add(cell)

        return True
