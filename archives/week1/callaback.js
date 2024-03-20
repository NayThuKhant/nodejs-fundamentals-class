const higherOrderFunction = (callback) => {
  // Do Something
  callback()
  // Do Something
}

const aNormalFunction = () => {
  console.log("Normal function is executed")
}

higherOrderFunction(aNormalFunction)
