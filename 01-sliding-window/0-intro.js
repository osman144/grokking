// Easy 
// ============  average of all  subarrays of ‘K’ contiguous elements ==============

/*
 Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
 return an array of the averages
**/

/*
  Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
**/

function averageElements(arr, k){
  let average = [];
  let left = 0;
  let sum = 0;

  for(let right=0; right<arr.length; right++){
    sum = arr[right] + sum; 
    if(right+1 >= k){
      average.push(sum/k);
      sum = sum - arr[left];
      left = left + 1;
    }
  }

  return average;
}

console.log(averageElements([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));