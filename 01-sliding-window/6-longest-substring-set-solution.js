// Medium
// Longest Substring with Distinct Characters
// Can use hash table or set to solve this

// Set solution 
const sw = (str) => {
  let length = 0;
  let start = 0;
  const set = new Set(); // unique values

  for (let end = 0; end < str.length; end++) {
    let currVal = str[end];
    if (set.has(currVal)) {
        set.delete(str[start]);
        start++;
    }
    set.add(currVal);
    length = Math.max(length, set.size);
  }

  return length;
}

console.log(sw('aabccbb'))

// Hash map solution
