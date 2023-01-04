// easy
// ============ Flood Fill ==============
function floodFill(matrix,x,y,newColor){
  let oldColor = matrix[x][y];
  if(matrix[x][y] !== newColor){
    // if 1 != 2
    bfs_flood(matrix,x,y,oldColor,newColor)
  }
  return matrix;
}

function bfs_flood(matrix,x,y,oldColor,newColor){
  let queue = [[x,y]];

  while(queue.length > 0){
    let cell = queue.shift();
    let row = cell[0];
    let col = cell[1];

    // first conditional check
    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) continue;

    // second conditional, return if cell not equal to old color
    if(matrix[row][col] !== oldColor) continue;

    // update cell
    matrix[row][col] = newColor;

    queue.push([row+1,col]) // lower
    queue.push([row-1,col]) // upper
    queue.push([row,col+1]) // right
    queue.push([row,col-1]) // left
  }
}

console.log(floodFill([
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
], 1, 3, 2));