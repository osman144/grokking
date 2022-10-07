// easy
// ============ Biggest Island ==============

/*
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0]

  islands = 5
**/

function biggestIsland(matrix){
  let rows = matrix.length; // 5
  let cols = matrix[0].length; // 5
  let maxCount = 0;

  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      if(matrix[i][j] === 1){
        // compare current count and max count
        maxCount = Math.max(dfs(matrix,i,j), maxCount);
      }
    }
  }

  return maxCount;
}

function dfs(matrix,i,j){
  if(i<0 || i >= matrix.length || j<0 || j >=matrix[0].length) return 0;

  if(matrix[i][j] === 0) return 0; 

  matrix[i][j] = 0 // mark visited

  let count = 1; // increment count

  count += dfs(matrix,i-1,j) // down
  count += dfs(matrix,i+1,j) // up
  count += dfs(matrix,i,j+1) // right
  count += dfs(matrix,i,j-1) // left

  return count
}


console.log(biggestIsland([
  [1, 1, 1, 0, 0]]
))