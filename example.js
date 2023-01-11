// challenge problems
// ===== Island Perimeter =====

function findPerimeter(matrix){
  let rows = matrix.length;
  let cols = matrix[0].length;
  let perimeter = 0;

  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      if(matrix[i][j] === 1){
        perimeter = dfs(matrix,i,j);
      }
    }
  }

  return perimeter;
}


function dfs(matrix,i,j){
  let perimeter = 0;
  if(i<0 || i>= matrix.length || j < 0 || j >= matrix[0].length){
    return 1;
  };

  if(matrix[i][j] === 0){
    return perimeter + 1;
  };

  if(matrix[i][j] === "visited") return 0;

  matrix[i][j] = "visited";

  perimeter = perimeter + dfs(matrix,i+1,j); // lower
  perimeter = perimeter + dfs(matrix,i-1,j); // upper
  perimeter = perimeter + dfs(matrix,i,j-1); // left
  perimeter = perimeter + dfs(matrix,i,j+1); // right

  return perimeter;
}


console.log(findPerimeter(
  [
    [0,0,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,1,0],
    [0,1,0,0]
  ]
))