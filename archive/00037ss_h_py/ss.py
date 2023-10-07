class Solution:
    def solveSudoku(self, board):
        """
        Do not return anything, modify board in-place instead.
        """
        if not board or len(board) != 9 or len(board[0]) != 9:
            return

        self.solve(board)

    def solve(self, board):
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    for num in '123456789':
                        if self.is_valid(board, i, j, num):
                            board[i][j] = num
                            if self.solve(board):  # Recursive call
                                return True
                            else:
                                board[i][j] = '.'  # Backtrack
                    return False
        return True

    def is_valid(self, board, row, col, num):
        for i in range(9):
            if board[i][col] == num:
                return False
            if board[row][i] == num:
                return False
            if board[3 * (row // 3) + i // 3][3 * (col // 3) + i % 3] == num:
                return False
        return True
