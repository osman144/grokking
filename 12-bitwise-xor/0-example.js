// Easy
// ============ Intro ==============

/*
Input: 1, 5, 2, 6, 4
Answer: 3
- XOR all the numbers in the input array with all numbers from the range 1 to n 
- then each number in the input is going to get zeroed out except the missing number
1. XOR all the numbers from 1 to n, let’s call it x1
2. XOR all the numbers in the input array, let’s call it x2.
3. The missing number can be found by x1 XOR x2.
*/

function findMissingNumber(arr) {
  const n = arr.length + 1;
  // x1 represents XOR of all values from 1 to n
  // find sum of all numbers from 1 to n.
  let x1 = 1;
  for (let i = 2; i <= n; i++){
    // 1 ^ 2 = 3
    // 3 ^ 3 = 0
    // 0 ^ 4 = 4
    // 4 ^ 5 = 1
    // 1 ^ 6 = 7
    x1 = x1 ^ i;
  }

  // x2 represents XOR of all values in arr
  let x2 = arr[0]; // 1
  for (let i = 1; i < n-1; i++){
    // 1 ^ 5 = 4
    // 4 ^ 2 = 6
    // 6 ^ 6 = 0
    // 0 ^ 4 = 4
    x2 = x2 ^ arr[i];
  }

  // missing number is the xor of x1 and x2
  // 7 ^ 4 = 1
  return x1 ^ x2;

}

console.log(findMissingNumber([1,5,2,6,4]))