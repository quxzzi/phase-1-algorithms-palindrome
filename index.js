const { stringify } = require("mocha/lib/utils");

const isPalindrome = str => str === str.split("").reverse().join("");

/* 
  Function isPalindrome(str):
    reversedStr = ReverseString(str)
    If str is equal to reversedStr, Then
        Return True
    Else
        Return False

Function ReverseString(str):
    reversed = Empty string
    For i from length of str minus 1 down to 0, decrementing i by 1:
        reversed = reversed + str[i]
    Return reversed

    I don't fully understand psuedo-code. I'm not sure how to do it.
*/

/*
  str.split("") will split the string by every character.
  .reverse() will reverse the string.
  .join("") will join the reversed string back to the original
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
