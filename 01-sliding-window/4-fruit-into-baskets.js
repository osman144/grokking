// Medium
// ============ Fruits into Baskets ==============

/*
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Input: Fruit = ['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
**/ 

function fruitBasket(arr){
  let obj = {};
  let left = 0;
  let maxLength = 0;
  /*
    obj = {
      a: 1,
      b: 1,
      c: 1
    }
  */

  for(let right=0; right<arr.length; right++){
    let rightChar = arr[right];
    if(!(obj[arr[right]])){
      obj[rightChar] = 0;
    }
    obj[rightChar] = obj[rightChar] + 1;

    while(Object.keys(obj).length > 2){
      let leftChar = arr[left];
      obj[leftChar] = obj[leftChar] - 1;
      if(obj[leftChar] === 0){
        delete obj[leftChar];
      }

      // move left up;
      left = left + 1;
    };

    let length = right - left + 1;

    maxLength = Math.max(maxLength, length)
  }

  return maxLength
}

console.log(fruitBasket(['A', 'B', 'C', 'B', 'B', 'C']))