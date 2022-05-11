const factorialize = num => {
  if (num < 0) {
    return "Dont exist"
  } else if (num == 0 || num == 1) {
    return 1
  } else if (num > 0) {
    return num * factorialize(num - 1)
  }
}

console.log(factorialize(5));