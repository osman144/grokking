// Medium
// ============ Permutations =============

const permutations = (nums) => {
  let numsLength = nums.length
  let result = []
  let permutations = [[]];

  for(let i=0; i<numsLength; i++){
    let currNum = nums[i]; // 3
    let currLevelLength = perm.length; // 1
    for(let j=0; j<currLevelLength;j++){
      
      let currLevel = perm.shift(); // [1]

      // length = 2
      // creating new level from current level
      for(let k=0; k<currLevel.length + 1;k++){
        let newPerm = currLevel.slice(); // create copy, not to reference 

        // use splice to add in each required position 
        newPerm.splice(k, 0, currNum); // [3, 1]

        // if reached end, add current permutation to result
        if(newPerm.length === numsLength){
          result.push(newPerm); //[3,1] [1,3]
        }else{
          // otherwise add new level to permutation
          perm.push(newPerm) // [[1]]
        }
      }
    }
  }

  return result;
}

console.log(permutations([1,3]))

// Time Complexity (N! * N)

// Space Complexity (N! * N)