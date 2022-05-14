function chunkArrayInGroups(arr, size) {
  let dummyArray = [];
  for (let i = 0; i < arr.length; i += size) {
    dummyArray.push(arr.slice(i,i+size))
  }
  return dummyArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));