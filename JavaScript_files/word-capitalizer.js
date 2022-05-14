const titleCase = str => {
  let dummyArray = str.split(" ");
  for (let i = 0; i < dummyArray.length; i++) {
    dummyArray[i] = dummyArray[i].toLowerCase();
    dummyArray[i] = dummyArray[i][0].toUpperCase() + dummyArray[i].slice(1,);  
  }
  return dummyArray.join(" ");
}

console.log(titleCase("I'm a little tea pot"));