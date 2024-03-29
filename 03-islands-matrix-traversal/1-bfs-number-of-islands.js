// easy
// ============ Number of Islands ==============

/*
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]

  islands = 3
**/

function countIslandsBFS(matrix){
  let rows = matrix.length;
  let cols = matrix[0].length;
  let numOfIslands = 0;

  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if(matrix[i][j] === 1){
        // if the element is land 
        numOfIslands++;
        bfs(matrix, i, j)
      }
    }
  }
  
  return numOfIslands;
}

function bfs(matrix, i, j){
  // create a queue 
  const neighbors = [[i,j]]  // [[0,1]] for example

  while(neighbors.length > 0){
    const cell = neighbors.shift() // remove from head
    const row = cell[0] 
    const col = cell[1]

    // validate
    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) continue; // skip

    if(matrix[row][col] === 0) continue; // skip

    matrix[row][col] = 0; // mark the call visited by making it a water cell

    // add neighbors to queue
    neighbors.push([row+1, col]);
    neighbors.push([row-1, col]);
    neighbors.push([row, col+1]);
    neighbors.push([row,col-1]);
  }
}

// time O(MxN)
/** space will be O(min(M,N)), in the worst case when matrix is completely filled with 
 * land cells, the size of the queue can grow up to min(M,N)
*/

console.log(countIslandsBFS([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]]
))