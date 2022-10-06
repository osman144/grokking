// Easy
// ============ Cyclic Sort ==============

/* 
Examples:

Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]

Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]

Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]
**/

function cyclicSort(arr){
  // must be in place sort
  if(arr.length < 2) return arr;

  // [1, 5, 3, 4, 2]
      _  
  let i = 0;
  // 2 < 5
  while(i < arr.length){
    let j = arr[i] - 1; // 3 - 1 = 2
    // 3 !== 5
    if(arr[i] !== arr[j]){
      [arr[i], arr[j]] = [arr[j], arr[i]] // swap
    }
    i++;
  }

  return arr;
}

console.log(cyclicSort([3, 1, 5, 4, 2]))