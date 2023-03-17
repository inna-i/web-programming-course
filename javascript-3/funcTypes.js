fnDeclaration('Bruce Wayne');

const fnArrow = (name) => {
    console.log('Hello from arrow fn my name is' + name + '!');
}

const fnExpression = function(name) {
    console.log('Hello from fnExpression my name is' + name + '!');
}

function fnDeclaration(name) {
    console.log('Hello from fnDeclaration my name is' + name + '!');
}

// hoisting
fnArrow('Bruce Wayne');
fnExpression('Bruce Wayne');
