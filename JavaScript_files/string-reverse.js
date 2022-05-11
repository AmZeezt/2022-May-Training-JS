const reverseString = str => {
  let reversedString = "";
  let regEx = /.{1}/g;
  let dummyArray = str.match(regEx).reverse();
  for (let i = 0; i < dummyArray.length; i++) {
    reversedString+= dummyArray[i];
  }
  return reversedString;
}

const reverseString2 = str2 => {
  let reversedString = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    reversedString +=  str2[i];
  }
  return reversedString;
}

reverseString("hello");
reverseString2("hello");

console.log(reverseString("hello"))
console.log(reverseString2("hello"))