console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5; // Set maxItems GLOBALLY

// Inital addItem() commented out for the STRETCH GOAL portion to work.
// function addItem(item){
//     basket.push(item);
//     return true;
// }

console.log(`Adding Apple ${addItem('apple')}`);
console.log(`Adding egg ${addItem('egg')}`);
console.log(`Adding pear ${addItem('pear')}`);
console.log(`Adding chicken ${addItem('chicken')}`);
console.log(`Adding milk ${addItem('milk')}`);
console.log(basket);

function listItems(){
    for (let i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
}
listItems()

// basket = [];
// console.log(basket);

function empty(){
    // basket = []
    for (let i=basket.length-1; i>=0; i--){
        basket.pop();
    }
}
empty();
console.log(basket);

// STRETCH GOALS
// const maxItems = 5;
function isFull(){
    if (basket.length < maxItems){
        console.log('Basket is NOT full.');
        return false;
    }   else {
        console.log('Basket is full.');
        return true;
    }
}
console.log(basket);
isFull();

function addItem(item){
    if (isFull() === false){
    basket.push(item);
    return true;
    } else {
        return false;
    }
}
// Checking to see if addItme() is functioning correctly by adding more than the 5 maxItems. 
addItem('candy');
addItem('milk');
addItem('sugar');
addItem('flour');
addItem('egg');
addItem('soysauce');
addItem('mayo');
addItem('pear');
addItem('pear');
addItem('pear');
addItem('pear');
console.log(basket);

// remove item
function removeItem(item){
    let itemIndex = basket.indexOf(item);
    console.log(`index of removed item ${itemIndex}`);
    if (itemIndex > -1){
        console.log(basket[itemIndex]);
        basket.splice(itemIndex, 1);
    } else {
        console.log(null);
        return null;
    }
}
    // basket.splice(itemIndex);
removeItem('flour');
console.log(basket);

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
