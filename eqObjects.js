const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//this function returns true of both objects have identical keys with identical values
//else return false
//pseudo
//scan object, check if keys are the same, check if values are the same
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true



const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab, abc),false);

assertEqual(eqObjects(ab, ba),true);