// Medium
// ============ Number of Islands ==============

/*
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]

  islands = 3
**/


function countIslandsDFS(matrix){
  const rows = matrix.length;
  const cols = matrix[0].length;
  let totalIslands = 0;

  for(let i=0; i< rows;i++){
    for(let j=0; j< cols; j++){
      if(matrix[i][j] === 1){ 
        // if the cell is land increment
        totalIslands = totalIslands + 1;
        visitIslandDFS(matrix,i,j);
      }
    }
  }
  return totalIslands;
}

function visitIslandDFS(matrix,x,y){
  if(x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return;
  if(matrix[x][y] === 0) return; // if water cell

  matrix[x][y] = 0; // mark the cell visited 

  // recursively visit all neighboring cells (horizontally and vertically)
  visitIslandDFS(matrix, x + 1, y); // lower cell
  visitIslandDFS(matrix, x - 1, y); // upper cell
  visitIslandDFS(matrix, x, y + 1); // right cell
  visitIslandDFS(matrix, x, y - 1); // left cell
}

console.log(countIslandsDFS([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]]
))
