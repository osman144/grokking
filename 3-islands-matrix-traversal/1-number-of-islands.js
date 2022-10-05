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
        totalIslands =+ 1;
        visitIslandDFS(matrix,i,j);
      }
    }
  }
  return totalIslands;
}

function visitIslandDFS(matrix,x,y){
  // if(x || x >= matrix.length || y)
  console.log(x-1);
}

countIslandsDFS([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]]
  )
