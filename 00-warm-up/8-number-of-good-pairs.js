// Easy 
// ============ Number of Good Pairs ==============

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs, here are the indices: (0,3), (0,4), (3,4), (2,5).

function numGoodPairs(nums) {
  let pairCount = 0;
  let occurrences = {};

  for (let n of nums) {
    if(!occurrences[n]) {
      occurrences[n] = 1;
    } else {
      // For every subsequent occurrence of n, it can form pairs with its previous occurrences.
      pairCount += occurrences[n];
      occurrences[n]++;
    }
  }

  return pairCount;
}
let nums1 = [1, 2, 3, 1, 1, 3];
let result1 = numGoodPairs(nums1);

// time O(n)
// space O(n)