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
  let newArr = [];
  let left = 0
  let right = arr.length-1;

  while(left <= right){
    let leftCurrent = Math.pow(arr[left], 2);
    let rightCurrent = Math.pow(arr[right], 2);

    if(leftCurrent > rightCurrent){
      newArr.unshift(leftCurrent);
      left++;
    }else{
      newArr.unshift(rightCurrent);
      right--;
    }
  }

  return newArr;
}

console.log(squareSorted([-2, -1, 0, 2, 3]));
console.log(squareSorted([-3, -1, 0, 1, 2]));
console.log(squareSorted([-4, -1, 0, 3, 10]));