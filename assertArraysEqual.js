
const eqArrays = function(arrayOne,arrayTwo) {
  let equal = false;

  for (let i = 0; i < arrayOne.length; i++) {
   
    if (arrayOne[i] === arrayTwo[i]) {
      equal = true;
    } else {
      equal = false;
    }
  }

  return equal;
};

const assertArraysEqual = function(arrayOne,arrayTwo) {
  
  console.log(arrayOne,arrayTwo);
  console.log(eqArrays(arrayOne,arrayTwo));

  if (eqArrays(arrayOne,arrayTwo)) {
    return console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 4]);