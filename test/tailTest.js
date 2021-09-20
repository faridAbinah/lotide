const tail = require('../tail');
const assertEqual = require('../assertEqual')
const words = ["Yo Yo", "Lighthouse", "Labs"];




 // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 2);