// Medium
// ============ Triplet Sum Close to Target ==============

/* 
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
**/

// solution
/*
- sort array
- find x+y+z = target or closest to it
- add each value to array
- reduce array

[-2, 0, 1, 2]
 i         lr

0, 1
*/

function tripletTarget(arr, target){
  arr = arr.sort((a,b) => a-b);
  let result = arr[0] + arr[1] + arr[arr.length-1]; // 0

  for(let i=0; i<arr.length; i++){
    let left = i+1;
    let right = arr.length-1;

    while(left<right){
      let currentSum = arr[i] + arr[left] + arr[right];
      if(currentSum>target){
        right--;
      }else if(currentSum<target){
        left++;
      }
      // 2 < 2
      if(Math.abs(currentSum - target) < Math.abs(result - target)){
        result = currentSum;
      }
    }
  }

  return result;
}

console.log(tripletTarget([-2, 0, 1, 2], 2))