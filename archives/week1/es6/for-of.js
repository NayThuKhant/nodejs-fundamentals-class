// Can be used to iterate over objects - object, array, string (Originally a primitive, but js provie a String Wrapper on to of it)

const languages = ['JavaScript', 'PHP', 'Python']

for (let language of languages) {
  console.log(language)
}

const favoriteLanguage = 'Javascript'

for (let char of favoriteLanguage) {
  console.log(char.toUpperCase())
}
