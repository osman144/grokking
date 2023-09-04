// Easy 
// ============ Panagram ==============

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Use a hash map or hash set
// hash map length should be 26 ? :P

function panagram(str){
  let seen = new Set();

  for(let char of str){
    if(char.match(/[a-zA-Z]/i)){
      seen.add(char);
    }
  }

  return seen.size == 26;
}

console.log(panagram('TheQuickBrownFoxJumpsOverTheLazyDo 42'))

// Time complexity O(n), doing 1 pass through string
// Space Complexity O(1), size of hash set will be consistent, will hold at most 26 characters

// function panagram(str){
//   const letter = {};

//   // need to remove spaces from str, also remove digits
//   str = str.replace(/[\d\s]+/g, '');

//   for(let char of str){
//     let formatted = char.toLowerCase();
//     if(!letter[formatted]){
//       letter[formatted] = 1;
//     }else{
//       letter[formatted] = letter[formatted] + 1;
//     }
//   }
//   return Object.keys(letter).length == 26;
// }

// console.log(panagram('TheQuickBrownFoxJumpsOverTheLazyDog 42'))