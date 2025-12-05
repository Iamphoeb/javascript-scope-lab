let burgers = [ `Hamburger`, `Cheeseburger`, ];
let featureDrink = `Strawberry Milkshake` ;

function addBurger() {
    let newBurger = `Flatburger` ;
    burgers.push(newBurger);
}

if (true) {
    let anotherNewBurger = `Maple Bacon Burger` ;
    burgers.push(anotherNewBurger);
}

function changeFeatureDrink() {
    featureDrink = `JavaShake` ;
}

console.log(`Initial Burgers:`, burgers);
console.log(`Initial Feature Drink:`, featureDrink);

addBurger(); 
changeFeatureDrink();

console.log(`After calls - Burgers:`, burgers);
console.log(`After calls - Feature Drink:`, featureDrink);
