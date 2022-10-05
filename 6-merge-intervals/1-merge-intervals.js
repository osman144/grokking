// Medium
// ============ Merge Intervals ==============

/* 
Examples:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]

Intervals: [[3,5], [1,4], [2,6]]
Output: [[1,6]]
**/

/*
1. Sort the intervals
2. If b.start <= a.end, a overalps b need to merge them into a new interval c
3. Keep repeating step 2
*/

function merge(intervals){
  if(intervals.length < 2) return intervals;
  intervals = intervals.sort((a,b) => a[0] - b[0]);
  let merged = [];
  let previous = intervals[0]; // [1,4]

  for(let i=1; i<intervals.length; i++){
    if(intervals[i][0] <= previous[1]){
      // [1, 4] [2, 5] --> [1, 5]
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    }else{
      merged.push(previous); 
      previous = intervals[i];
    }
  }

  merged.push(previous);
  
  return merged;
}

console.log(merge([[1,4],[2,5],[7,9]]));

/*
  Time O(n * logn)
  Space O(n), array used to return the list s
  merge sort -> O(nlogn)
**/


// Additional Problem
