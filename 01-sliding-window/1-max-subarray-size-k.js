// Easy
// ============ Maximum Sum Subarray of Size K ==============

/*
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
**/ 

/* 
1. Go through array with loop. Add initial window of size K.
2. Once reach array of index greater than k, move left one to the right and keep going
3. Find the max return the max
*/

function maxSubarray(arr, k){
  let left = 0;
  let max = 0;
  let currentWindowMax = 0;

  for(let right=0; right<arr.length;right++){
    currentWindowMax = arr[right] + currentWindowMax;

    if(right >= k-1){
      max = Math.max(currentWindowMax, max);
      currentWindowMax = currentWindowMax - arr[left];
      left=left+1;
    }
  }
  
  return max;
}

console.log(maxSubarray([2, 1, 5, 1, 3, 2], 3))

