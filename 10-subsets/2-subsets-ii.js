// Easy
// ============ Subsets II =============

const subsets = (nums) => {
  // sort
  nums.sort((a,b) => a-b);
  const newArr = [[]]
  let startIndex = 0;
  let endIndex = 0;

  for(let i =0; i<nums.length;i++){
    startIndex = 0;

    if(i > 0 && nums[i] === nums[i-1]){
      startIndex = endIndex + 1; // 1
    }
    endIndex = newArr.length - 1; // 1

    // j is 1, 
    for(let j = startIndex; j < endIndex + 1; j++){
      const subset = newArr[j].slice(); // [[],[1]]
      subset.push(nums[i]); // i =1, [[1]]
      newArr.push(subset); //[[], [1]] 
    }
  }

  return newArr;
}

console.log(subsets([1,3,3]))

// time complexity O(n*2^n)

// space  complexity O(n*2^n)
// space grows at n, and each level 2^n