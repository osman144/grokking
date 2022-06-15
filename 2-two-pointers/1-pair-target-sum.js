// Easy
// ============ Pair with Target Sum ==============

/* 
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
**/

function pairSum(arr, target){
  let left = 0;
  let right = arr.length-1;

  while(left < right){
    let val = arr[left] + arr[right];

    if(val === target){
      return [left, right];
    }

    if(val > target){
      right = right - 1;
    }

    if(val < target){
      left = left + 1;
    }
  }

  return null;
}

console.log(pairSum([2, 5, 9, 11], 11));

// choice choice choice