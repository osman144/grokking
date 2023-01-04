// easy
// ============ Number of Islands ==============

/*
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]

  islands = 4
**/

function biggestIsland(matrix){
  let rows = matrix.length;
  let cols = matrix[0].length;
  let bigIsland = 0;

  for(let i =0; i<rows; i++){
    for(let j=0; j<cols;j++){
      if(matrix[i][j] === 1){
        let currentCount = bfs_matrix(matrix,i,j);
        bigIsland = Math.max(bigIsland,currentCount);
      }
    }
  }

  return bigIsland
}


function bfs_matrix(matrix,i,j){
  let queue = [[i,j]]; // [0,0] for example
  let area = 0
  
  while(queue.length > 0){
    let cell = queue.shift(); // remove from queue [0,0]
    let row = cell[0] // 0
    let col = cell[1] // 0

    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) continue;

    if(matrix[row][col] === 0) continue // skip over

    matrix[row][col] = 0;
    area = area + 1;

    queue.push([row+1,col]) // lower
    queue.push([row-1,col]) // upper
    queue.push([row,col+1]) // right
    queue.push([row,col-1]) // left
  }

  return area
}


console.log(biggestIsland([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]]
))