const getIndexToIns = (arr, num) => {
  let dummyArray = arr;
  dummyArray.sort((a,b) => a-b);
  console.log(dummyArray)
  for (let i = 0 ; i < dummyArray.length; i++) {
    console.log(dummyArray[i])
    if (num <= dummyArray[i]) {
      return i
    }
  }
  return dummyArray.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));