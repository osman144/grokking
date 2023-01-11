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
        let val = bfs(matrix,i,j);
        if(val){
          numOfClosedIslands = numOfClosedIslands + 1; // increment
        }
      }
    }
  }


  return numOfClosedIslands;
}

function bfs(matrix,i,j){
  let queue = [[i,j]];
  let isClosed = true;

  while(queue.length > 0){    
    // check boundaries
    let cell = queue.shift();
    let row = cell[0];
    let col = cell[1];
    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) return false; // skip current elem

    if(matrix[row][col] === 0 || matrix[row][col] === 'visited') continue; // skip

    matrix[row][col] = 'visited'; // mark cell as visited

    queue.push([row+1,col]); // lower
    queue.push([row-1,col]) // upper
    queue.push([row,col+1]) // right
    queue.push([row,col-1]) // left

  }

  return isClosed;
}

console.log(closedIslands([
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
])
);