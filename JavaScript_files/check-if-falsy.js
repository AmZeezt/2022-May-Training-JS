const bouncer = arr => {
  let dummyArray = [];
  for (let i = 0; i < arr.length; i++) {
    !arr[i] ? "": dummyArray.push(arr[i]);
  }
  return dummyArray;
}

console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(typeof NaN);
