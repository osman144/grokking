// Easy
// ======= Island Perimeter (BFS) =======
function countPerimeter(matrix){
  let rows = matrix.length;
  let cols = matrix[0].length;
  let perimeter = 0;

  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      if(matrix[i][j] === 1){
        perimeter = bfs(matrix,i,j);
      }
    }
  }

  return perimeter;
}

function bfs(matrix,i,j){
  let perimeter = 0;
  let queue = [[i,j]];

  while(queue.length > 0){
    let cell = queue.shift();
    let row = cell[0];
    let col = cell[1];

    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length){
      perimeter = perimeter + 1;
      continue; // skip
    }

    if(matrix[row][col] === 0){
      perimeter = perimeter + 1;
      continue;
    }

    if(matrix[row][col] === 'visited') continue;

    matrix[row][col] = 'visited';

    queue.push([row+1,col]); // lower
    queue.push([row-1,col]) // upper
    queue.push([row,col-1]) // left
    queue.push([row,col+1]) // right
  }

  return perimeter;
}



console.log(countPerimeter(
  [
    [0,1,0],
    [0,1,0]
  ]
))

// 6