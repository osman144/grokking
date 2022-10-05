var topKFrequent = function(nums, k) {
  // sort (nlogn)
  // this will use O(n) space
  let map = {};
  for(let num of nums){
      if(num in map){
          map[num] = map[num] + 1;
      }else{
          map[num] = 1;
      }
  }
  return map;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));