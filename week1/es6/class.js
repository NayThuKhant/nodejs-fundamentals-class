// Before ES6
function PersonFromPrototype(name) {
  this.name = name
}

PersonFromPrototype.prototype.walk = function () {
  console.log(`${this.name} is instructed to walk`)
}

const personFromPrototype = new PersonFromPrototype('A JS Geek')
personFromPrototype.walk()

// ES6
class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(`${this.name} is instructed to walk`)
  }
}

const person = new Person('A JS Geek')
person.walk()

// Class is not an object, it's just a template(blueprint) for objects
