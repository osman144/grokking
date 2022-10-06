// Easy
// ============ Smallest Subarray with a Greater Sum ==============

/*
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].
**/ 

// function 
function smallestSub(arr, testSum){
  if(arr.length === 0) return 0;
  let left = 0;
  let windowSum = 0;
  let lengthSubarray = Infinity;

  for(let right=0; right < arr.length; right++){
    windowSum = windowSum + arr[right]; // 1 + 5
    while(windowSum >= testSum){
      let windowLength = (right-left)+1; // get current window length 
      lengthSubarray = Math.min(windowLength, lengthSubarray); // 3
      windowSum = windowSum - arr[left];
      left=left+1 // move left to the right by one
    }
  }

  return lengthSubarray;
}

console.log(smallestSub([2, 1, 5, 2, 8], 7))