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
  for (i = 0; i < myString.length; i++)
  let newSubString = myString.substring(1, myString.length- 1)
  let newString = myString[myString.length] + newSubString
  if (myString.length > 1) {
    let newString = myString[myString.length] + reverseString(myString.substring(1, myString.length - 1));
  } else {
    return true
  }
}
