const promise = new Promise((resolve, reject) => {
  try {
    // Try something
    resolve('A value')
  } catch (error) {
    reject(error)
  }
})

promise.then((value) => console.log(value)).catch((error) => console.log(error))
