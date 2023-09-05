// Easy 
// ============ Reverse Vowels ==============

// Input: s= "hello"
// Output: "holle"

// O(n) solution
// Two Pointer Solution
function reverseVowels(str){
  let left = 0;
  let right = str.length-1;
  const vowels = 'AEIOUaeiou';
  let arr = str.split('');

  // hello

  while(left < right){
    while(left < right && !vowels.includes(arr[left])) {
      left = left+1; 
    }
    let thing = arr[left]
    let thong = arr[right]
    if(left < right && !vowels.includes(arr[right])) {
      right = right-1; 
    }

    // swap
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp; 

    left++;
    right--;
  }

  return arr.join('');
}

console.log(reverseVowels('DesignGUrus'))

// Time complexity is O(n)
// Space is O(n), using array to modify string as strings in javascript are immutable