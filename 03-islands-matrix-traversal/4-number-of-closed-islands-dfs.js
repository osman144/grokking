// easy
// ============ Number of Closed Islands ==============

function closedIslands(matrix){
  let rows = matrix.length;
  let cols = matrix[0].length;
  let numOfClosedIslands = 0;

  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      if(matrix[i][j] === 1){
        // return true of false;
        let val = dfs(matrix,i,j);
        if(val){
          numOfClosedIslands = numOfClosedIslands + 1; // increment
        }
      }
    }
  }


  return numOfClosedIslands;
}

function dfs(matrix,i,j){
  // check boundaries
  if(i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) return false;

  if(matrix[i][j] === 0 || matrix[i][j] === 'visited') return true;

  matrix[i][j] = 'visited'; // indicates visited

  let isClosed = true;

  isClosed = dfs(matrix,i+1,j) // lower
  isClosed = dfs(matrix,i-1,j) // upper
  isClosed = dfs(matrix,i,j+1) // right
  isClosed = dfs(matrix,i,j-1) // left

  return isClosed;
}

console.log(closedIslands([
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
])
);