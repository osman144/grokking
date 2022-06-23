// Medium
// ============ Triplets with Smaller Sum ==============

/* 
Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]


Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
**/

/* solution
- add up the triplets, if less than target, record in array
- return length of array

[-1, 0, 2, 3], target=3 
  i     l  r

*/

function tripletsSmaller(arr, target){
  arr = arr.sort((a,b) => a-b); // ascending, smallest to largest
  let count = 0; // 2

  for(let i=0; i<arr.length-2; i++){

    let left = i+1 // 3
    let right = arr.length-1; // 3
    while(left<right){
      let sum = arr[i] + arr[left] + arr[right]; // -1 + 2 + 3 -> 4
      // 4 < 3
      if(sum < target){
        count = count + right - left; // 2
        left++;
      }else{
        right--;
      }
    }
  }

  return count;
}

console.log(tripletsSmaller([-1, 4, 2, 1, 3], 5))