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
function smallestSubarrayGreaterSum(arr, s){
  let windowStart = 0;
  let windowSum = 0;
  let length = 0;

  for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
    // First get the sum for current window
    windowSum = windowSum + arr[windowEnd];
    length++;
    console.log(windowSum)
    if(windowSum >= s){
      // remove start element from window
      windowSum = windowSum - arr[windowStart] // 8 - 2
      windowStart++;
      length--;
    }
  }
  // could not get to sum with given numbers
  if(windowSum < s){
    return 0;
  }
  return length;
}

// console.log(smallestSubarrayGreaterSum([2, 1, 5, 2, 8], 10000))



// ========= Solution 2 ==============
function smallest_subarray_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}


console.log(`Smallest subarray length: ` + smallest_subarray_sum(1, [2, 1, 5, 2, 3, 2]));
// console.log(`Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 8]));
// console.log(`Smallest subarray length: ` + smallest_subarray_sum(8, [3, 4, 1, 1, 6]));