const permutations = (nums) => {
  let result = [] // returned perm, i.e. [[1,3], [3,1]]
  let perm = [[]]; // [[1]]
  let numsLength = nums.length;
  for(let i=0; i<numsLength; i++){
    let currNum = nums[i];
    let currLevelLength = perm.length;
    for(let j=0; j<currLevelLength; j++){
      let currLevel = perm.shift();
      for(let k=0; k<currLevel.length + 1; k++){
        let newPerm = currLevel.slice() // copy current level;
        newPerm.splice(k, 0, currNum)
        // if new level is same as length of given nums
        if(newPerm.length === numsLength){
          // add to result
          result.push(newPerm); 
        }else{
          perm.push(newPerm); 
        }
      }
    }
  }
  return result;
}

console.log(permutations([1,3]))