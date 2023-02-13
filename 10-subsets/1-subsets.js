// Easy
// ============ Subsets =============

const subsets = (arr) => {
  let newArr = [[]];

  // outer for loop traverses each level
  for(let i=0; i<arr.length; i++){
    let currLength = newArr.length; 
    for(let j = 0; j<currLength;j++){
      const currSub = newArr[j].slice() // [], create copy because otherwise will modify original
      currSub.push(arr[i]); // [1]
      newArr.push(currSub) // [[], []]
    }
  }

  return newArr;
}

console.log(subsets([1,5,3]));

// time complexity O(n*2^n)

// space  complexity O(n*2^n)
// space grows at n, and each level 2^n