// Medium
// Longest Substring with Distinct Characters

// Map Solution
const sw = (str) => {
  let start = 0;
  let maxLength = 0;
  let charMap = {};

  for (let end = 0; end < str.length; end++) {
    const currVal = str[end]; 

    if (currVal in charMap) {
      start = Math.max(start, charMap[currVal] + 1); // (0,  1)
    }

    charMap[currVal] = end;

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(sw('aabccbb'));
