// Easy 
// ============ Short Word Distance ==============

// Input: words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], word1 = "fox", word2 = "dog"
// Output: 5

// Solve using two pointer 

function shortWordDistance(words, word1, word2){
  let position1 = -1;
  let position2 = -1;
  let shortestDistance = words.length;

  for(let i=0; i<words.length; i++){
    if(words[i] === word1){
      position1 = i;
    }
    if(words[i] === word2){
      position2 = i;
    }
    if(position1 !== -1 && position2 !== -1){
      // if both words found
      let val = Math.abs(position1 - position2); // 0 - 4 
      shortestDistance = Math.min(val, shortestDistance)
    }
  }

  return shortestDistance;

}

console.log(shortWordDistance(['a', 'c', 'd','b','a'], 'a', 'b'));
console.log(shortWordDistance(words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], word1 = "fox", word2 = "dog"));
console.log(shortWordDistance(words = ["a", "b", "c", "d", "e"], word1 = "a", word2 = "e"));