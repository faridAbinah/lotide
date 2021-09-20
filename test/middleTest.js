const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;

describe("Middle", () => {
  //use deep equal when comparing arrays
  it("Should return 7 ", () => {

    assert.deepEqual(middle([1,2,7,4,5]),[7]);
  })


})

//assertArraysEqual(middle([1,2,7,4,5]),middle([1,2,7,4,5]));