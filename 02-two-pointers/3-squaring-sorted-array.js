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

// console.log(squareSorted([-2, -1, 0, 2, 3]));
// console.log(squareSorted([-3, -1, 0, 1, 2]));
// console.log(squareSorted([-4, -1, 0, 3, 10]));
 
function square(arr){
  let left = 0;
  let newArr = [];
  let right = arr.length - 1;

  while(left <= right){
    let squareLeft = Math.pow(arr[left], 2);
    let squareRight = Math.pow(arr[right], 2);

    if(squareLeft < squareRight){
      newArr.push(squareRight);
      right--
    }else {
      newArr.push(squareLeft);
      left++;
    }
  }

  return newArr.reverse();
}


console.log(square([-2, -1, 0, 2, 3]));
console.log(square([-3, -1, 0, 1, 2]));


// Time Complexity O(2n) --> O(n)
// Space O(n)