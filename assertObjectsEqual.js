const eqObjects = function(object1,object2) {
  let equal = false;
for(let item1 in object1) {
  //console.log(item1);

  for(let item2 in object2) {
    
    if(item1 === item2) {
      

      if(object1[item1] === object2[item2]) {
        equal = true
      }
      
    } else { 
      equal = false;
    }
  }

  return equal;
}

}

const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect;
  // Line of code above is a workaround. without doing this when we try to print our bjects it will show [Object][Object] 
  if(eqObjects(actual,expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
   
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// => true
assertObjectsEqual(cd, dc);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // false
