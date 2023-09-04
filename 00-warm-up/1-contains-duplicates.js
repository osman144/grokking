// Easy 
// ============ Contains Duplicates ==============

// nums = [1,2,3,4]
// false, no duplicates
// true, [1,2,3,1]
// use map,
// add to map 
// when reach value, do look up if not in map, add to map or increment, map look up is O(1)
// space is O(n)

function containsDuplicates(arr){
  let map = {};

  for(let num of arr){
    if(map[num] === undefined){
      return true;
    }
    map[num] = true;
  }
  return false;
}

console.log(containsDuplicates([1,2,3,4, 1]))

// Space Complexity O(n), in the worst case the data structure will contain n distinct elements 
// Time Complexity O(n), where n is the length of the input array, doing single pass through

