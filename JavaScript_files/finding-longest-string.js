function findLongestWordLength(str) {
  let regEX = /(\w+)/g;
  let dummyArray = str.match(regEX);
  let longest = dummyArray[0];
  for (let i = 0; i < dummyArray.length; i++) {
    if (dummyArray[i].length > longest.length) {
      longest = dummyArray[i];
    }
  }
  return longest.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));