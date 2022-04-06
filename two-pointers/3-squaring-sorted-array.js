// Easy
// ============ Squaring a Sorted Array ==============

/* 
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Input: [-3, -1, 0, 1, 2]
             l  r
Output: [0, 1, 1, 4, 9]

Input: [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]
**/

function squareSorted(arr){
  let left = 0;
  let right = arr.length - 1
  let squares = []; // [1, 1, 4, 9]

  while(left <= right){
    let leftSquared = Math.pow(arr[left], 2); // 1
    let rightSquared = Math.pow(arr[right], 2); // 0

    if(leftSquared > rightSquared){
      squares.unshift(leftSquared)
      left = left + 1;
    }else{
      squares.unshift(rightSquared) 
      right = right - 1;
    }
  }

  return squares;
}

console.log(squareSorted([-3, -1, 0, 1, 2]));