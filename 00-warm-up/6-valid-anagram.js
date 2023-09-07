// Easy 
// ============ Valid Anagram ==============

// Input: s = "listen", t = "silent"
// true 

// compare lengths, return false if don't match
// use freqMap
// add s to freqMap, increment by 1 or set to 0
// iterate through t, do look up, if not in freqMap return false, subtract
// return true
function validAnagram(s, t){
  if(s.length !== t.length) return false;

  const freqMap = {};

  for(let char of s){
    // listen
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  for(let char of t){
    // silent
    if(!freqMap[char]){
      // char not in map, return false
      return false;
    }
    freqMap[char]--;
  }

  return true;
}

// Time complexity O(n)
// Space O(n)