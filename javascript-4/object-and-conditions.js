/*
Завдання:
- Створити 5 об’єктів з різними типами даних
- Додати нові та змінити існуючі значення в створених об’єктах
- Використати if…else для зміни
- Використати switch…case для виведення дня тижня
- Використати методи для роботи з об’єктами: .assign(), .freeze(), .keys(), .entries()
*/

const cat = {
	name: "Felix",
	color: "grey",
	age: 3,
	likesFish: true,
	speak: () => console.log("miau"),
}

if(cat.color === 'grey'){
	// console.log(`${cat.name} is grey`);
}
// cat.speak();


const input = {
    day: 2,
    weeekday: null
}

switch(input.day) {
    case 1:
        input.weeekday = 'Monday';
        break;
    case 2:
        input.weeekday = 'Tuesday';
        break;
    case 3:
        input.weeekday = 'Wednesday';
        break;
    case 4:
        input.weeekday = 'Thursday';
        break;
    case 5:
        input.weeekday = 'Friday';
        break;
    case 6:
        input.weeekday = 'Saturday';
        break;
    case 7:
        input.weeekday = 'Sunday';
        break;
    default:
        console.warn('Please enter valid day number');
}

// console.log('Weekday is ', input.weeekday);

// assign()
const obj1 = {
    a: 10,
    b: 10,
    c: 100,
}
const obj2 = {
    b: 20,
    c: 40
}

const newObj = Object.assign(obj2, obj1)
// console.log(newObj);

// .freeze() .isExtensible() .isFrozen()
Object.freeze(obj1);

console.log('obj1 ', obj1);

if(Object.isFrozen(obj1)){
	console.log("object is frozen")
} else {
    obj1.d = 56;
}

if(Object.isExtensible(obj2)){
	obj2.d = 50;
    obj2['c'] = 88;
	console.log("object is extensible ", obj2)
}

const obj3 = {
    ...obj1,
    ...obj2,
    c: 333,
}

console.log('obj 3 ', obj3)