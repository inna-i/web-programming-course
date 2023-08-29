fnDeclaration('My text'); // hoisting

// arrow function
const arrowFn = (text) => {
    console.log('Hello from arrow function. ', text);
}
arrowFn('My custom text');

// function declaration
function fnDeclaration(text) {
    console.log('Hello from function declaration. ', text);
}

// function expression
const fnExpression = function(text) {
    console.log('Hello from function expression. ', text);
}
fnExpression('My text');

// immediately invoked function expression or IIFE
(function(){
    console.log('Hello from IIFE!');
})();