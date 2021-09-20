const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects =  require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPosition = require('./letterPosition');
const map = require('./map');
const takeUntill = require('./takeUntil');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly:    countOnly,
  eqArrays:     eqArrays,
  eqObjects:    eqObjects,
  findKey:      findKey,
  findKeyByValue: findKeyByValue,
  letterPosition:   letterPosition,
  map:              map,
  takeUntill:       takeUntill
};

console.log(module);