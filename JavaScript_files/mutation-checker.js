const mutation = arr => {
  let patern = arr[0].toLowerCase();
  let checking = arr[1].toLowerCase();
  for (let i = 0; i < checking.length; i++) {
    if (patern.indexOf(checking[i]) == -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));