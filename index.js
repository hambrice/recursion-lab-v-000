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
 let newSubString = myString.substring(1, myString.length- 1)
  // let newString = myString[myString.length] + newSubString
  let newString;
  if (myString.length > 1) {
    newString = myString[myString.length - 1] + reverseString(newSubString)
  } else {
    return newString
  }
}
