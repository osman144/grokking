// easy
// ============ Number of Closed Islands ==============

function numberOfClosedIslands(matrix){
  if(matrix.length < 0) return;

  let rows = matrix.length;
  let cols = matrix[0].length;

  let numberOfClosedIslands = 0;

  for(let i = 1; i < rows; i++){
    for(let j = 1; j< cols; j++){
      if(matrix[i][j] === 1){
        let isClosed = true;
        dfs(matrix,i,j,isClosed) // true, surrounded by all 0s
        if(isClosed){
          numberOfClosedIslands++;
        }
      }
    }
  }

  return numberOfClosedIslands;
}

function dfs(matrix,x,y,isClosed){
  if(x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return false;

  if(matrix[x][y] === 0 || matrix[x][y] === 'v') return true;

  matrix[x][y] = 'v';

  isClosed = dfs(matrix,x-1, y) // down
  isClosed = dfs(matrix,x+1, y) // up
  isClosed = dfs(matrix, x, y-1) // left
  isClosed = dfs(matrix, x, y+1) // right

  return isClosed;
}


console.log(numberOfClosedIslands([
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
]));

// 1