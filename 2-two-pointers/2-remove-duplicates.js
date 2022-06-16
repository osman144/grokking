// Easy
// ============ Remove Duplicates ==============

/* 
Input: [2, 3, 3, 3, 6, 9, 9]
           lr  
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
**/

function removeDuplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 0;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}

// console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))
