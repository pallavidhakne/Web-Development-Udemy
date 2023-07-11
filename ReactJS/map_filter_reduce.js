//var numbers = [3, 56, 2, 48, 5];

import emojipedia from "./emojipedia";
const newemojipedia = emojipedia.map(function (emojientry) {
  emojientry.meaning.substring(0, 100);
});
console.log(newemojipedia);
//Map -Create a new array by doing something with each item in an array.
function twise(x) {
  return x * 2;
}
const newans = numbers.map(twise);
console.log(newans);
//using for-each
const newarr = [];
function twise(x) {
  newarr.push(x * 2);
}
numbers.forEach(twise);
console.log(newarr);
//also write in
numbers.forEach(function (x)
{
newarr.push(2*x);
});
console.log(newarr);
//Filter - Create a new array by keeping the items that return true.
const newans= numbers.filter(function (num){
 return num>10;
});
console.log(newans)
//
var sum=0;
numbers.forEach(function (x)
{
   sum+=x;
   console.log(sum);
});
console.log(sum);
//Reduce - Accumulate a value by doing something to each item in an array.
var newNum=numbers.reduce(function (accumulator,currnum)
{
  console.log("accumulator= "+accumulator);
  console.log("curr= " + currnum);
  return accumulator+currnum;
});
console.log(newNum);
//Find - find the first item that matches from an array.
const newNumb = numbers.find(function (y) {
  return y > 10;
});
 console.log(newNumb);
//FindIndex - find the index of the first item that matches.
const newNumb = numbers.findIndex(function (y) {
  return y > 10;
});
console.log(newNumb);
