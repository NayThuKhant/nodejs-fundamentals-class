const higherOrderFunction = (callback) => {
  // Do Something
  callback('Helloworld')
  // Do Something
}

const aNormalFunction = (value) => {
  console.log(value)
}

higherOrderFunction(aNormalFunction)
