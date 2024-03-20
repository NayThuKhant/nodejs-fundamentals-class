function doSomething() {
  console.log('Do Something')
}

doSomething()

const arrowFunction = () => {
  console.log('Arrow Function')
}

const singleLineArrowFunction = (value) => value
console.log(singleLineArrowFunction('Single Line Arrow Function'))

// Arrow functions are not hoisted
