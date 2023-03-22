/* 
    1) Створити 10 змінних з різними типами даних
    2) Виконати перевірку типів
    3) Додати коментарі однорядкові та багаторядкові
    4) Використати оператори присвоєння для простих математичних операцій, а результат вивести з допомогою console
    5) Викорисати логічні та побітові оператори
*/

// primitive
var felix = 'Felix';
var tom = "Tom";

const MATH_PI = 3.14;
const figure = 'circle';

const isMathFunction = true; // we will calculate circle square

let result = null;
let defaultValue = undefined;

const welcome = 'Welcome, ';
const userName = 'Tony Stark';


// non-primitive
const configuration = {
    port: '3030',
    host: 'localhost',
}

const sayHi = name => console.log('Welcome, ', name, '!');
const array = [1, 3, 4];
// =============================================

const welcomeMsg = welcome + userName + '!';
// console.log('result: ', welcomeMsg);
// console.info('defaultValue: ', defaultValue);

// PI * r^2
const radius = 0;

const circleSquare = typeof radius == 'number'
    ? MATH_PI * radius * radius
    : 'Radius has wrong data type';


// console.log(circleSquare);

// console.log(typeof sayHi);
// console.log(typeof array);

let text = 'Hello from Kyiv!';
text += ' Have a nice day!'
	
let result1 = 100 * 100;
// result1 = result1 * MATH_PI;
result1 *= MATH_PI;

// console.log('result 1 =  ', result1);
// console.log('text =  ', text);


// logical operators
// тернарний оператор
const circleSquareMoreChecks = typeof radius == 'number' && radius > 0
    ? MATH_PI * radius * radius
    : 'Radius has wrong data type';

// // console.log(circleSquareMoreChecks)
// console.log(5 >> 1);
// console.log(5 | 1);

const a = 70;
const b = 333;

const isBValid = typeof b === 'number' && b > 0 && b === 333;

const sum = a >= 100 || isBValid 
    ? a + b + 1000
    : a + b;

// console.log(' a >= 100 ', a >= 100);
// console.log(' sum = ', sum);