var exist = function(board, word) {
    const ROW = board.length;
    const COL = board[0].length;
    const visited = new Array(ROW).fill(false).map(() => new Array(COL).fill(false));
    
    const dfs = (i, j, index) => {
        if (index === word.length) {
            return true;
        }
        if (i < 0 || j < 0 || i >= ROW || j >= COL || visited[i][j] || board[i][j] !== word[index]) {
            return false;
        }
        
        visited[i][j] = true;
        const res = dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1) || dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1);
        visited[i][j] = false;
        return res;
    }
    
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

let bd = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let wd = "ABCCED";

console.log(exist(bd, wd));