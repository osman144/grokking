// Easy
// ============ Remove Duplicates ==============

/*
Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and 
return the new length of the array.

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
*/
function removeDuplicates(arr, target){
  let l=0;
  let r=0;

  for(let r =0; r < arr.length; r++){
    if(arr[r] !== target){
      arr[l] = arr[r];
      l++;
    }
  }

  return l;
}

console.log(removeDuplicates([3, 2, 3, 6, 3, 10, 9, 3], 3));

// time O(n)

// space O(1)

