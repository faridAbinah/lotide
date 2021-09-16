const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

/**The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. */
const countLetters = function(sentence) {

  let results = {};


  for(let letter of sentence) {
    

    if(results[letter]) {
      results[letter] += 1;
    }

    else{
      results[letter] = 1;
    }
    
  }

  return results;

}

console.log(countLetters("lighthouse in the house"));