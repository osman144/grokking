// Easy
// ============ Remove Duplicates ==============

/* 
Input: [2, 3, 3, 3, 6, 9, 9]
           
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
**/

function removeDuplicates(arr){
  if(!arr.length) return;
  if(arr.length < 2) return 1;
  let left = 1;
  let right = 1;

  while(right < arr.length){
    if(arr[right] !== arr[right - 1]){
      // compare previous and update
      arr[left] = arr[right];
      left++;
    }
    right++;
  }

  return left;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))

// Time complexity O(n)
// Space complexity O(1)