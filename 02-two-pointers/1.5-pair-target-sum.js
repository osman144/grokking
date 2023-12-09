// Easy
// ============ Pair with Target Sum ==============
// Hash table solution 

function pairSum(arr, target){
    let map = {}

    for(let i=0; i<arr.length; i++){
        let val = arr[i]
        let search = target - val; // 11 - 2 
        if(search in map){
            return [map[search], i]
        }
        map[val] = i;
    }
    return [-1,-1];
  }
  
  console.log(pairSum([1,2,3,4,6], 6));
  
  // Time complexity O(n)
  
  // Space complexity O(1)