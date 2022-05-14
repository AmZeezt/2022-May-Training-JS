const confirmEnding = (str, target) => {
  let regExDynamic = `${target}$`;
  let regExObj = new RegExp(regExDynamic);
  return regExObj.test(str);
}

console.log(confirmEnding("Bastian", "n"));