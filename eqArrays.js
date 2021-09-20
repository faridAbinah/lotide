const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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


module.exports = eqArrays;