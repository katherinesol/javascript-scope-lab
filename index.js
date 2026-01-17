// Declare global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Create function-scoped variable
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// Create block-scoped variable
if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

// Change featured drink name
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}