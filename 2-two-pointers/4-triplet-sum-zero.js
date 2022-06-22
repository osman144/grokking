// Medium
// ============ Triplet Sum to Zero ==============

/* 
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.


Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
**/

// solution
/*
- sort the array
- target is zero
- iterate, so when x+y+z = 0 --> y + z = -x
- skip same element to avoid duplicate triplets
- find the triplets that sum to zero
[-2, -1, -1, 0, 1, 2, 3]
             
[-2, -1, 3] [-2, 0, 2] [-1, -1, 2] [-1, 0, 1]
*/

function tripletSum(arr){
  arr = arr.sort((a,b) => a-b);
  let tripletSum = [];

  for(let i=0; i<arr.length; i++){
    // skip same element for i value to avoid duplicates
    if(i>0 && arr[i] === arr[i-1]){
      continue;
    }

    let left=i+1;
    let right=arr.length-1;

    while(left<right){
      let sum= arr[i] + arr[left] + arr[right];
      if(sum<0){
        // too low 
        left++;
      }else if(sum > 0){
        // too high
        right--;
      }else{
        tripletSum.push([arr[i], arr[left], arr[right]]);
        left++;

        //shift left value forward if the left value the same
        while(left<right && arr[left] === arr[left-1]){
          left++;
        }
      }
    }
  }

  return tripletSum;
}

console.log(tripletSum([-2, -1, -1, 0, 1, 2, 3]));