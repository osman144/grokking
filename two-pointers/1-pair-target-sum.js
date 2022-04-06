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


function findSum(arr, targetSum){
  let right = arr.length-1;
  let left = 0;

  while(left < right){
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    }
    if (targetSum > currentSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }

  return 'none';
}

// Time complexity = O(n)
// Space complexity = O(1) constant space

