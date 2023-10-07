var solveNQueens = function(n) {
    const board = new Array(n).fill(null).map(() => new Array(n).fill('.'));
    const solutions = [];
  
    const isSafe = (row, col) => {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
        const j = row - i;
        if (col-j >= 0 && board[i][col-j] === 'Q') return false;
        if (col+j < n && board[i][col+j] === 'Q') return false;
      }
      return true;
    };
  
    const backtrack = (row) => {
      if (row === n) {
        solutions.push(board.map(row => row.join('')));
        return;
      }
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = 'Q';
          backtrack(row+1);
          board[row][col] = '.';
        }
      }
    };
  
    backtrack(0);
  
    return solutions;
  };

  console.log(solveNQueens(4));
  