// Easy
// ============ Remove Duplicates ==============

/*
Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and 
return the new length of the array.

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
*/

function removeDuplicates(arr, k){
  let left = 0;
  let right = 0;

  // [2, 6, 10, 9, 3, 10, 9, 3]
  //               l           r

  while(right < arr.length){
    // move all non-k values to the front
    if(arr[right] !== k){
      // swap
      arr[left] = arr[right] //
      left++;
    }
    right++;
  }

  return left;
}

console.log(removeDuplicates([3, 2, 3, 6, 3, 10, 9, 3], 3));