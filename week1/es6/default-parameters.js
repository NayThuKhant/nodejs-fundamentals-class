function isLeagalToBuyAlcohol(currentAge, limitation = 18) {
  return currentAge >= limitation
}

// US
console.log(isLeagalToBuyAlcohol(21, 20))

// MM
console.log(isLeagalToBuyAlcohol(21))
