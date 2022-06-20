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

/*
  1. Shift the elements left whenever we encounter duplicates

  2. Keep one pointer for iterating the array and one pointer for placing the next non-duplicate number

  3. So our algorithm will be to iterate the array and whenever we see a non-duplicate number we move it next to the last non-duplicate number we’ve seen.

*/

function removeDuplicates(arr){
  let nextNonduplicate = 1;

  let i=0;
  while(i<arr.length){
    if(arr[nextNonduplicate - 1] !== arr[i]){
      arr[nextNonduplicate] = arr[i];
      nextNonduplicate++;
    }

    i++;
  }

  return nextNonduplicate;
}

// [2, 3, 6, 9, 6, 9, 9]
//              n        i