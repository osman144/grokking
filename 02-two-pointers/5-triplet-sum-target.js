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
  let smallestDifference = Infinity;
  let closestSum = 0;

  for(let i=0; i<arr.length - 2; i++){
    let left = i+1;
    let right = arr.length-1;

    while(left<right){
      let currentSum = arr[i] + arr[left] + arr[right];
      let difference = Math.abs(target - currentSum) // 3 - 2 = 1

      if(difference === 0){
        return currentSum;
      }
      
      if(difference < smallestDifference){
        smallestDifference = difference // 1
        closestSum = currentSum // 2
      }

      if(currentSum < target){
        // 2 < 3
        left = left+1;
      }else{
        right = right-1;
      }
    }
  }

  return closestSum;
}

console.log(tripletTarget([-1, 0, 2, 3], 3))