const largestOfFour = arr => {
  let dummyArray = [];
  for (let i = 0; i < arr.length; i++) {
    dummyArray.push(Math.max(...arr[i]));
  }
  return dummyArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));