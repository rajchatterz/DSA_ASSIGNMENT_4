function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (let op of ops) {
      minRow = Math.min(minRow, op[0]);
      minCol = Math.min(minCol, op[1]);
    }
  
    return minRow * minCol;
  }
  
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  
  const result = maxCount(m, n, ops);
  console.log(result);
  