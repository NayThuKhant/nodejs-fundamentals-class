const promise = new Promise((resolve, reject) => {
  setTimeout(() => {}, 2000)
  try {
    resolve('A value')
  } catch (error) {
    reject(error)
  }
})

console.log('Blah Blah')
promise.then((value) => console.log(value)).catch((error) => console.log(error))
console.log('Blah Blah')
