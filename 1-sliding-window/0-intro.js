// Easy 
// ============  average of all  subarrays of ‘K’ contiguous elements ==============

/*
 Given an array, find the average of all  subarrays of ‘K’ contiguous elements in it.
 return an array of the averages
**/

/*
  Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
**/

// O(n^2) solution

// function average(input, k){
//   let res = [];


//   for(let i=0; i<input.length-k+1; i++){
//     let sum=0;

//     for(let j=i; j<i+k; j++){
//       sum=sum+input[j];
//     }
//     res.push(sum/k) // calculate average
//   }
//   return res;
// }

// With a while loop
// function average(input, k){
//   let res = [];

//   for(let left=0; left<input.length-k;left++){
//     let sum = 0;
//     let right = left;
//     while(right<left+k){
//       sum = sum + input[right];
//       right++;
//     }
//     res.push(sum/k)
//   }

//   return res;
// }


function average(arr, k){
  const result = [];
  let sum = 0;
  let left = 0;

  for(let right=0; right < arr.length; right++ ){
    sum = sum+arr[right];
    if(right >= k-1){
      // arrived at the end of the window
      result.push(sum/k);
      sum = sum - arr[right]; // subtract the element going out;
      left = left + 1; 
    }
  }

  return result;
}

console.log(average([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
