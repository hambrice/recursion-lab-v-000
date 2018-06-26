function printString(myString) {
  console.log(myString[0]);
  
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
 
  let newString;
  if (myString.length > 1) {
    let newSubString = myString.substring(0, myString.length- 1)
    newString = myString[myString.length - 1] + reverseString(newSubString)
    return newString;
  } else {
    return myString
  }
}

function isPalindrome(string) {
  if (string[0] === string[string.length - 1] && string.length > 1) {
    isPalindrome(string.substring(1, string.length - 1));
 
  } else if (string.length === 1) {
    return true;
  } else {
    return false;
  } 
}