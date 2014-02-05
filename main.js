///Restaurant Objects:
var MenuItem = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};
MenuItem.prototype.isVegan= function(){
	for (var i =0; i<this.ingredients.length; i++){
		if (!this.ingredients[i].vegan){
			return false;
		}
	}
	return  true;
};
MenuItem.prototype.isGlutenFree = function(){
	for (var i =0; i<this.ingredients.length; i++){
		if (!this.ingredients[i].glutenFree){
			return false;
		}
	}
	return  true;};
MenuItem.prototype.isCitrusFree = function(){
	for (var i =0; i<this.ingredients.length; i++){
		if (!this.ingredients[i].citrusFree){
			return false;
		}
	}
	return  true;};
MenuItem.prototype.toString = function(){
	return "{0}: {1}  Price: {2}. {3}{4}{5}   Ingredients: {6}".supplant([
		this.name,
		this.description,
		this.price,
		this.isVegan() ? "  This " + (this instanceof Plate ? "plate" : "drink") + " is vegan." : "",
		this.isGlutenFree() ? "  This " + (this instanceof Plate ? "plate" : "drink") + " is gluten free." : "", 
		this.isCitrusFree() ? "  This " + (this instanceof Plate ? "plate" : "drink") + " is citrus free." : "",
		this.ingredients.toString().split(",").join()
	]);
};




var FoodItem = function(name, calories, isVegan, isGlutenFree, isCitrusFree){
this.name = name;
this.calories=calories;
this.vegan = isVegan || false;
this.glutenFree = isGlutenFree || false;
this.citrusFree = isCitrusFree || false;
}
FoodItem.prototype.toString = function(){
	// tempArray = 
	return "{0}:  {1} calories.{2}{3}{4}".supplant([this.name, this.calories,
		this.vegan ? "  This ingredient is vegan." : "",
		this.glutenFree ? "  This ingredient is gluten free." : "", 
		this.citrusFree ? "  This ingredient is citrus free." : "" ]);
};


var Drink = function(name, description, price, ingredients){
	MenuItem.call(this, name, description, price, ingredients);
	// this.name = name;
	// this.description = description;
	// this.price = price;
	// this.ingredients = ingredients;
};
Drink.prototype= new MenuItem();
// Drink.prototype.toString = function(){
// 	return "{0}: {1}  Price: {2}. {3}{4}{5}   Ingredients: {6}".supplant([this.name,
// 									this.description,
// 									this.price,
// 									this.isVegan() ? "  This drink is vegan." : "",
// 									this.isGlutenFree() ? "  This drink is gluten free." : "", 
// 									this.isCitrusFree() ? "  This drink is citrus free." : "",
// 									this.ingredients.toString()
// 									]);
// };

var Plate = function(name, description, price, ingredients){
	MenuItem.call(this, name, description, price, ingredients);
	// this.name = name;
	// this.description = description;
	// this.price = price;
	// this.ingredients = ingredients;
};
Plate.prototype= new MenuItem();
// Plate.prototype.toString = function(){
// 	return "{0}: {1}  Price: {2}. {3}{4}{5}   Ingredients: {6}".supplant([this.name,
// 									this.description,
// 									this.price,
// 									this.isVegan() ? "  This " + (this instanceof Plate ? "plate" : "drink") + " is vegan." : "",
// 									this.isGlutenFree() ? "  This " + (this instanceof Plate ? "plate" : "drink") + " is gluten free." : "", 
// 									this.isCitrusFree() ? "  This " + (this instanceof Plate ? "plate" : "drink") + " is citrus free." : "",
// 									this.ingredients.toString()
// 									]);
// };
// Plate.prototype.isVegan= function(){
// 	for (var i =0; i<this.ingredients.length; i++){
// 		if (!this.ingredients[i].vegan){
// 			return false;
// 		}
// 	}
// 	return  true;
// };
// Plate.prototype.isGlutenFree = function(){
// 	for (var i =0; i<this.ingredients.length; i++){
// 		if (!this.ingredients[i].glutenFree){
// 			return false;
// 		}
// 	}
// 	return  true;};
// Plate.prototype.isCitrusFree = function(){
// 	for (var i =0; i<this.ingredients.length; i++){
// 		if (!this.ingredients[i].citrusFree){
// 			return false;
// 		}
// 	}
// 	return  true;};

var Order = function(plates){
this.plates = plates;
};
Order.prototype.toString = function(){
	return "Order plates: {0}".supplant([this.plates.toString()]);
};

var Menu = function(plates){
this.plates = plates;
};
Menu.prototype.toString = function(){
	// return "Menu plates: {0}".supplant([this.plates.toString()]));
	var messageString = "Menu plates: \n";
	for (var i=0; i < this.plates.length; i++){
		messageString += "#" + (i + 1) + "  " + this.plates[i].toString() +"\n";
	} 
	return messageString;
};

var Restaurant = function(name, description, menu){
this.name = name;
this.description = description;
this.menu = menu
};
Restaurant.prototype.toString = function(){
	return "{0}: {1} {2}".supplant([this.name, this.description, this.menu.toString()]);
};

var Customer = function(dietaryPreference){
this.dietaryPreference = dietaryPreference;
};
Customer.prototype.toString = function(){
	return "Dietary preferences: {0}".supplant([this.dietaryPreference.toString()]);
};


////////////////////////////////////////
/////FOOD ITEMS
var salt = new FoodItem('salt', 0, true, true, true);
var lime = new FoodItem('lime', 20, true, true, false);
var tequila = new FoodItem('tequila', 200, true, true, true);

var cornShell = new FoodItem('cornShell', 200, true, false, true);
var lettuce = new FoodItem('lettuce', 150, true, true, true);
var avocado = new FoodItem('avocado', 200, true, true, true);
var cheese = new FoodItem('cheese', 250, false, true, true);
var tortilla = new FoodItem('tortilla', 100, true, false, true);
var beans = new FoodItem('beans', 100, true, true, true);
var beef = new FoodItem('beef', 200, false, true, true);








var manhattan = new Drink("manhattan", "adult bev", "$9.00", ["sweet vermouth", "soda", "cherries"]);
// manhattan.toString();





var guacamole = new Plate("guacamole", "Delicious, made fresh daily, green!", "$10", [avocado, salt, lime]);
var beanBurrito = new Plate("bean burrito", "Delicious made with fresh ingredients", "$9", [tortilla, lettuce, cheese, beans]);
var margarita = new Drink("margarita", "Delicious made lime juice and good tequila", "$15", [tequila, lime, salt]);
var myMenu = new Menu ([guacamole, beanBurrito, margarita]);
// console.log(myMenu.toString());

var myRestaurant = new Restaurant("Tequila Nirvana", "~~Spanish Hindu Fusion~~", myMenu);
console.log(myRestaurant.toString());
