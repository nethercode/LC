class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        n = len(mat)
        res = 0
        for i in range(n):
            res += mat[i][i]  # primary diagonal
            if i != n-i-1:  # avoid double-counting center element for odd n
                res += mat[i][n-i-1]  # secondary diagonal
        return res
