// // Medium
// ============ Happy Number ==============

/*
Input: 23   
Output: true (23 is a happy number)  
Explanations: Here are the steps to find out that 23 is a happy number:
23 -> 4 + 9 = 13
13 -> 1 + 9 = 10
10 -> 1 + 0 = 1
This is a happy number, reached 1
**/

// Solve using fast/slow pointer
function happyNumber(num){
  let slow = num;
  let fast = num;
  while(true){
    slow = findSquareSum(slow);
    fast = findSquareSum(findSquareSum(fast));
    if(slow === fast){
      // found cycle
      break;
    }
  }
  
  return slow === 1 // see if cycle stuck on 1, will return true
}

function findSquareSum(num){
  let sum = 0;
  let stringNum = num.toString().split('');
  for(let i of stringNum){
    let n = parseInt(i);
    sum = sum + Math.pow(n, 2);
  }
  return sum;
}

console.log(happyNumber(12));
