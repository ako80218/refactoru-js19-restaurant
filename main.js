
var FoodItem = function(name, calories){
this.name = name;
this.calories=calories;
}
FoodItem.prototype.toString = function(){
	console.log ("The {0} is {1}  calories.".supplant([this.name, this.calories]));
};

var taco = new FoodItem('taco', 200);


taco.toString();

console.log(FoodItem.length);


