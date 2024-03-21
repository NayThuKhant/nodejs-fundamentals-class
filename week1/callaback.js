const higherOrderFunction = (callback) => {
  // Do Something
  callback('Helloworld')
  // Do Something

  // Typicall in most of the definitions, higher order functions must return the incoming function
}

const aNormalFunction = (value) => {
  console.log(value)
}

higherOrderFunction(aNormalFunction)
