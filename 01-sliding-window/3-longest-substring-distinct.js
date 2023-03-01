// Medium
// ============ Longest Substring with K Distinct Characters ==============

function longestDistinctSubstring(str, k){
  let maxLength = 0;
  let start = 0;
  const charFreq = {};

  for(let end=0; end<str.length; end++){
    if(!(str[end] in charFreq)){
      charFreq[str[end]] = 0;
    }
    charFreq[str[end]] += 1; // increment
    let lengthOfCharFreq = Object.keys(charFreq).length; // get length


    while(lengthOfCharFreq > k){
      // decrement current char of left pointer
      charFreq[str[start]] -= 1;
      if(charFreq[str[start]] === 0){
        delete charFreq[str[start]]; // delete if 0
      }
      // move left pointer by 1
      start += 1
      lengthOfCharFreq = Object.keys(charFreq).length;
    }

    maxLength = Math.max(maxLength, (end - start) + 1)
  }

  return maxLength
}

console.log(longestDistinctSubstring('araaci', 0))