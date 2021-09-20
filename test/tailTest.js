const tail = require('../tail');
const assert = require('chai').assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("Tail", () => {

  it(" returns lighthouse,labs for yo yo, lighthouse,", () => {
    
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length,2);
  });

  
});


 // no need to capture the return value since we are not checking it
//assertEqual(tail(words).length, 2);