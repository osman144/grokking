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

function maxSumSubarray(arr, k){
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum = windowSum + arr[windowEnd] 
  
    if(windowEnd >= k - 1){
      maxSum = Math.max(maxSum, windowSum);
      windowSum = windowSum - arr[windowStart];
      windowStart++; // slide the window ahead
    }
  }
}

console.log(maxSumSubarray([2, 3, 4, 1, 5], 2))
                                  ____