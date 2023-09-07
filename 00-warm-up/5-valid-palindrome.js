// Easy 
// ============ Valid Palindrome ==============

// Input: sentence = "A man, a plan, a canal, Panama!"
// true 

// Two pointer solution

function validPalindrome(str){
  // let arr = str.split('');
  let left = 0;
  let right = str.length-1;

  while(left < right){
    // while char is not alphanumeric move to next line
    while(left < right && !str[left].match(/[a-zA-Z0-9]/)){
      // move up
      left++;
    }

    while(left < right && !str[right].match(/[a-zA-Z0-9]/)){
      // move down
      right--;
    }

    if(str[left].toLowerCase() !== str[right].toLowerCase()){
      return false;
    }

    left++;
    right--;

  }

  return true;
}

console.log(validPalindrome('A man, a plan, a canal, Panama!'));

// Time complexity O(n)
// Space Complexity is O(1)