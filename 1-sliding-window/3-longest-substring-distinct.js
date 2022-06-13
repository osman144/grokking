// Medium
// ============ Longest Substring with K Distinct Characters ==============

/*
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
**/ 

function longestDistinctSubstring(str, k){
  if(k < 1) return null;
  let arr = str.split('');
  let obj = {};
  let left = 0;
  let length = 0;

  // a  r  a  a  c  i
  //             l  r

  /*
    {
      c: 1,
      i: 1
    }
  */

  for(let right=0; right<arr.length; right++){
    let size = Object.keys(obj).length; // 2

    if(size < k){
      if(!(arr[right] in obj)){
        obj[arr[right]] = 1;
      }else{
        obj[arr[right]] += 1;
      };
    }

    console.log(obj);
    
    // while(size >= k && !(arr[right] in obj)){
    //   // move left up 
    //   if(arr[left] <= 1){
    //     obj[arr[left]--]
    //     delete obj[arr[left]];
    //     left = left + 1;
    //   }else{
    //     obj[arr[left]--];
    //     left = left + 1;
    //   }
    //   size = Object.keys(obj).length;
    // }

    // let currentLength = 0;
    // for (var property in obj) {
    //   currentLength += obj[property];
    // }
    // length = Math.max(length, currentLength); // 4
  }

  return length;
}

console.log(longestDistinctSubstring("araaci", 2));