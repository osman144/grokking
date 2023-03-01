// Easy
// ============ Smallest Subarray with a Greater Sum ==============


const sw = (arr, sum) => {
  let currSum = 0;
  let length = Infinity;
  let start = 0;

  for(let end = 0; end<arr.length; end++){
    currSum = currSum + arr[end];
    while(currSum >= sum){
      let currLength = (end - start) + 1;
      length = Math.min(length, currLength);
      currSum = currSum - arr[start]
      start = start + 1;
    }
  }

  return length
}


console.log(sw([2,1,5,2,3,100], 100))