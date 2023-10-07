var kWeakestRows = function(mat, k) {
    const m = mat.length;
    const n = mat[0].length;
    const rows = [];
    for (let i = 0; i < m; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 1) {
                count++;
            } else {
                break;
            }
        }
        rows.push([count, i]);
    }
    rows.sort((a, b) => a[0] - b[0]);
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(rows[i][1]);
    }
    return result;
};

/*
// test
const mat = [
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]
  ];
  const k = 3;
  const expectedOutput = [2, 0, 3];
  const actualOutput = kWeakestRows(mat, k);
  
  console.assert(
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
    `Test case failed: expected ${expectedOutput}, got ${actualOutput}`
  );
  
  console.log(`Test case passed: expected ${expectedOutput}, got ${actualOutput}`);
*/