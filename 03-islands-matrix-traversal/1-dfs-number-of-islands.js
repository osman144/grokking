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


function countIslandsDFS(grid){
  let rows = grid.length;
  let columns = grid[0].length;
  let numOfIslands = 0;
    
  for(let row = 0; row < rows; row++ ){
      for(let col = 0; col < columns; col++){
          if(grid[row][col] === 1){
              numOfIslands = numOfIslands + 1;
              
              // run dfs 
              dfs(grid,row,col)
          }
      }
  }
    
  return numOfIslands
}

function dfs(grid,row,col){
  if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;

  if(grid[row][col] === 0 ) return; // if visited, 0, -1
  
  grid[row][col] = 0;
  
  dfs(grid, row-1, col) // left
  dfs(grid, row+1, col) // right
  dfs(grid, row, col-1) // down
  dfs(grid, row, col+1) // up
}


console.log(countIslandsDFS([
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]]
))

// Time complexity O(MxN) row x col, have to traverse both
// Space complexity, DFS recursion stack can go M*N deep when the whole matrix is filled with 1's so space is O(MxN)
// 







// countIslandsDFS(matrix){

// function countIslandsDFS(matrix){
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   let totalIslands = 0;

//   for(let i=0; i< rows;i++){
//     for(let j=0; j< cols; j++){
//       if(matrix[i][j] === 1){ 
//         // if the cell is land increment
//         totalIslands = totalIslands + 1;
//         visitIslandDFS(matrix,i,j);
//       }
//     }
//   }
//   return totalIslands;
// }

// dfs(matrix,i,j){
//   if(matrix[i][j])
//   if(matrix[i][j] < 0 || matrix[i][j] > 1)

//   // update visited, change to 0
//   matrix[i][j] = 0;

//   dfs(matrix,i-1,j) //left;
//   dfs(matrix,i+1,j) //right
//   dfs(matrix,i,j-1) //down
//   dfs(matrix,i,j+1) //up
// }



// console.log(countIslandsDFS([
//   [1, 1, 1, 0, 0],
//   [0, 1, 0, 0, 1],
//   [0, 0, 1, 1, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0]]
// ))
