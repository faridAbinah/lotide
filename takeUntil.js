/**
 * 
 The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
 */
const takeUntil = function(array, callback) {
  let results = [];

  for(let item of array) {
    if(callback(item)) { 
      return results;
    }
    else {
      results.push(item);
    }
  }
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([ 1, 2, 5, 7, 2 ],results1);
assertArraysEqual([ "I've", 'been', 'to', 'Hollywood' ],results2);

