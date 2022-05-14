const frankenSplice = (arr1, arr2, n) => {
  let dummy = arr2.slice();
  dummy.splice(n, 0, ...arr1);
  return dummy;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));