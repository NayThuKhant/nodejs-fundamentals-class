var varVariable = 'Var Variable'
{
  var varScopeVariable = 'Var Scope Variable'
  console.log(varVariable)
}
console.log(varScopeVariable)

let noneScopeVariable = 'Non Scope Variable'
{
  let variable = 'Variable'
  console.log(noneScopeVariable)
}

console.log(variable)

// Var keyword has no scope at all & Let keyword respect the scope
