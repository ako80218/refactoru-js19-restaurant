
var FoodItem = function(name, calories, isVegan, isGlutenFree, isCitrusFree){
this.name = name;
this.calories=calories;
this.vegan = isVegan || false;
this.glutenFree = isGlutenFree || false;
this.citrusFree = isCitrusFree || false;
}

FoodItem.prototype.toString = function(){
	console.log ("The {0} is {1}  calories.{2}{3}{4}".supplant([this.name, this.calories,
		this.vegan ? "  This item is vegan." : "",
		this.glutenFree ? "  This item is gluten free." : "", 
		this.citrusFree ? "  This item is citrus free." : "" ]));
};
var taco = new FoodItem('taco', 200, true, false, true);
var salad = new FoodItem('salad', 150, true, true, true);
var steak = new FoodItem('steak', 300, false, true, true);
taco.toString();
salad.toString();
steak.toString();




