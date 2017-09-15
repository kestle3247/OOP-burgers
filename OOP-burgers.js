var FoodItem = function(name, calories, vegan, glutenFree){
  this.name = name
  this.calories = calories
  this.vegan = false
  this.glutenFree = false
}
var bacon = new FoodItem('Bacon', '100', false, true)

FoodItem.prototype.stringify = function(){
  if (this.vegan == true)
  {
      this.vegan == "is"
  }
  else {
      this.vegan == "not"
  }
  console.log(`${this.name} has ${this.calories} calories, is ${this.vegan ? '' : 'not'} vegan, and ${this.glutenFree} gluten free.`)
}
console.log(bacon.stringify())


//example

var FoodItem = function(calories, isVegan, isGlutenFree){
  this.name = name
  this.calories = calories
  this.isVegan = isVegan
  this.isGlutenFree = isGlutenFree
}

FoodItem.protoype.stringify = function(){
  var vegan = ''
  var glutenFree = ''
  if ( !this.isVegan ) {
    vegan = 'not'
  }
  if ( !this.isGlutenFree ) {
    glutenFree = 'not'
  }
  return `${this.name} has ${this.calories} calories. It is ${vegan} vegan and it is ${glutenFree} free`
}
