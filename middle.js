
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

const middle = function(array) {

  

  const middleIndex = (array.length - 1) / 2;

  
  //console.log(array.slice(middleIndex,middleIndex + 1));

  if (array.length > 2) {

    if (array.length % 2 !== 0) {
      return array.slice(middleIndex,middleIndex + 1);
    } else if (array.length % 2 === 0) {
      return array.slice(middleIndex,middleIndex + 2);
    }
  }
};
  
  



//assertArraysEqual([1, 2, 3], [1, 2, 4]);

console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5]));
console.log(assertArraysEqual(middle([1,2,7,4,5]),middle([1,2,7,4,5])));
