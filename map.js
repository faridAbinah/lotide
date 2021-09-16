const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}



const assertArraysEqual = function(arrayOne,arrayTwo) {
  
  //console.log(arrayOne,arrayTwo);
  //console.log(eqArrays(arrayOne,arrayTwo));

  if (eqArrays(arrayOne,arrayTwo)) {
    return console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const eqArrays = function (arrayOne,arrayTwo)
{
  let equal = false;
  for(let i = 0; i < arrayOne.length;i++)
  {
   
    if(arrayOne[i] === arrayTwo[i]) {
      equal = true;
    }
    else {
      equal = false;
    }
  }

  return equal;
}


const results1 = map(words, word => word[0]);
const results2 = map(words,word => word.length);
const results3 = map(words, word => word[1]);


console.log(results3);


assertArraysEqual([ 'g', 'c', 't', 'm', 't' ],results1);

assertArraysEqual([ 6, 7, 2, 5, 3 ],results2);

assertArraysEqual([ 'r', 'o', 'o', 'a', 'o' ],results3);
