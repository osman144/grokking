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

function merge(intervals){
  if (intervals.length < 2) return intervals;
  
  intervals.sort((a, b) => a[0] - b[0]);
  // [[1, 4], [2, 6], [3, 5]]
  
  const result = [];
  let previous = intervals[0]; // [1, 4]
  
  for (let i = 1; i < intervals.length; i += 1) {
    // 6 >= 5
    if (previous[1] >= intervals[i][0]) {
      // previous = [1, 6]
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  
  // result = [[1, 6], ]
  result.push(previous);
  
  return result;
}

console.log(merge([[3,5], [1,4], [2,6]]));

/*
  Time O(n * logn)
  Space O(n), array used to return the list
  Merge sort also uses O(n) so O(n + n) --> O(n)
**/


// Additional Problem
