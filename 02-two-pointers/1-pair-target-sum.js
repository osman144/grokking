// Easy
// ============ Pair with Target Sum ==============

function pairSum(arr, target){
  let left = 0;
  let right = arr.length-1;

  while(left < right){
    let val = arr[left] + arr[right];

    if(val === target){
      return [left, right];
    }

    if(val > target){
      right = right - 1;
    }else {
      left = left + 1;
    }
  }

  return [-1,-1];
}

console.log(pairSum([2, 5, 9, 11], 11));

// Time complexity O(n)

// Space complexity O(1)

// Alternative approaches: Using hash map
