// Easy 
// ============ Sqrt ==============

// Input: x = 8
// Output: 2

// Can solve this in O(logn) time using binary search
function sqrt(x){
  if(x < 2) return x;
  let l=0;
  let r=x 
  let ans=0;
  
  while(l <= r){
    let mid = Math.floor((l+r)/2);
    let square = mid * mid; // 2 * 2;
    if(square === x){
      return mid;
    }
    if(square > x){
      r = mid - 1;
    }else {
      l = mid + 1;
      ans = mid;
    }
  }
  return ans
}

console.log(sqrt(8));

// function mySqrt(int){
//   let val = 0;

//   for(let i=0; i<int; i++){
//     let curr = i*i;
//     if(curr === int){
//       return val = i;
//     }
//     if(curr > int){
//       return val = i-1;
//     }
//   }
  
//   return val;
// }

// console.log(mySqrt(16))

// time complexity of this solution O(sqrt(n)), going through each value until reach sqrt of n;
// space complexity is O(1)