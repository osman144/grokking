// easy
// ============ Flood Fill ==============

function floodFill(matrix, x, y, newValue){
  // check if selected cell in matrix matches new value 
  if(matrix[x][y] !== newValue){
    // otherwise if not, run dfs helper
    dfsHelper(matrix,x,y,matrix[x][y], newValue)
  }

  return matrix;
}

function dfsHelper(matrix, x, y, oldValue, newValue){
  if(x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return;

  if(matrix[x][y] !== oldValue) return;

  // update matrix to new value
  matrix[x][y] = newValue;

  dfsHelper(matrix,x+1,y,oldValue,newValue); // lower cell
  dfsHelper(matrix,x-1,y,oldValue,newValue); // upper cell
  dfsHelper(matrix,x,y+1,oldValue,newValue) // right
  dfsHelper(matrix,x,y-1,oldValue,newValue);  
}


console.log(floodFill([
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
], 1, 3, 2));