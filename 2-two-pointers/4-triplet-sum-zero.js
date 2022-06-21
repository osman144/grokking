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
- iterate, so when x+y+z = 0 --> y + z = -x
- find 
*/

function tripletSumZero(arr){
  arr = arr.sort((a,b) => a-b);
  let res = [];

  for(let i=0; i<arr.length; i++){
    if(i > 0 && arr[i] === arr[i-1]){
      continue;
    };

    let left = i+1;
    let right = arr.length-1;
    
    while(left<right){
      let threeSum = arr[i] + arr[left] + arr[right];
      if(threeSum > 0){
        right--;
      }else if(threeSum < 0){
        left++;
      }else{
        res.push([arr[i], arr[left], arr[right]]);
        left++;

        // shift pointer if same value
        while(arr[left] === arr[left-1] && left < right){
          left++;
        }
      }
    }
    // console.log(res)
  }
  // console.log(res);
  return res
}

console.log(tripletSumZero([-5, 2, -1, -2, 3]))

/*
[-3, -2, -1, 0, 1,  1,  2]
a    l                  r
*/