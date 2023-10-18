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

function tripletSum(arr){
  arr.sort((a, b) => a - b)
  const triplets = [];
  for(let t=0; t<arr.length;t++){
    if(arr[t] > 0) break; // if current element is greater than 0, break out of loop
    if(t > 0 && arr[t] === arr[t-1]){
      // if target same as previous
      continue
    }
    let r=arr.length-1;
    let l=t+1
    while(l < r){
      let sum = arr[r] + arr[l] + arr[t]
      if(sum === 0){
        triplets.push([arr[t], arr[l], arr[r]])
        l++;
        r--;
        while(l < r && arr[l] === arr[l-1]){
          l = l + 1;
        }
        while(l < r && arr[r] === arr[r+1]){
          r = r - 1;
        }
      }
      if(sum > 0){
        r--;
      }
      if(sum < 0){
        l++;
      }
    }
  }

  return triplets;
}

console.log(tripletSum([-5, 2, -1, -2, 3]));

// Time complexity O(n^2)
// Sorting will take O(nlogn)
// For loop is O(n)
