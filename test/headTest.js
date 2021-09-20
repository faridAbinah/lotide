const head = require('../head');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// mocha and chai test code
//Mocha gives us the describe and it functions. "it" is a test 

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("returns '5' for ['5']", () => {

    assert.strictEqual(head(['5']), '5');
  });


  it("returns '7' for ['7,8,9'] ", () => {

    assert.strictEqual(head([7,8,9]), 7);
  });

})