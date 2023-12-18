/*
==========================
    Start of your tasks
==========================
Read what should be done per task and add your implementation 
(between curly brackets {})
*/
/*
===========================================
             FUNCTIONS
===========================================
*/ 
// Task 0 (example) - should return the string "Hello!"
function saySomething(msg) {
    return msg;
  }
  
  // Task 1 - should return the string "Hello, World!"
  function sayHelloWorld() {
      // your implementation should be there
    return "Hello, World!";
  }
  
  // Task 2 - should return the string "Hello, Somename!"
  function sayHello(name) {
      // your implementation should be there
    return "Hello, " + name + "!";    
  }
  
  // Task 3 - should return sum of two numbers
  // a + b
  function sumNumbers(a, b) {
  // your implementation should be there
      return a + b;
  }
  
  // Task 4 - should return a value by key in provided object
  // provided object - { name: 'Name' }y
  // result - 'Name'
  function valueByKeyInObject(key, obj = {}) {
      // your implementation should be there
    return obj[key]
  }
  
  function extendObject(key, value, obj = {}) {
      // your implementation should be there
      return {...obj, [key]: value}
  }
    
/*
===========================================
             ARRAYS
===========================================
*/  

// Task 1 - should return an array with
// 3 incoming arguments a, b and c
function createArray(a, b, c) {
// your implementation should be there
}

// Task 2 - should return the array without first element
function removeFirst(inputArray) {
// your implementation should be there
}

// Task 3 - should merged arrays and return new one
// example [1,2] and [3,4] => [1,2,3,4]
function mergeArrays(arr1, arr2) {
// your implementation should be there
}

// Task 4 - should return the array, where an item changed
// using index and value from arguments
// example:  ([3,4], 1, 'cat')  => [3, 'cat']
function changeItemByIndex(arr, index, value) {
// your implementation should be there
}

/*
===========================================
             ARRAY METHODS
===========================================
*/ 
// Task 1 - sort an array with numbers
// array example [7,101,3,1,9,11,100,111]
function sortArray(array) {
// your implementation should be there
return array.sort((a, b) => a-b)

}

// Task 2 - filter an array of strings and keep only
// a string, that is not a word 'test'
// array example [
//   'test', 'cat', 'parrot',
//   'banana', 'test', 'dog'
// ]
function filterArraysOfString(array) {
// your implementation should be there
    return array.filter(st => st !== 'test')
}

// Task 3 - find sum of numbers in array using .reduce()
// const numsArray = [
//   1, 3, 5, 10, 19, 100, 200, 33,
// ]
function sumNumbersInArray(array) {
// your implementation should be there
return array.reduce((acc,n) => acc += n, 0)
}

// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
// arrayItems = [
//   { a: 1, b: 3 },
//   { a: 3, b: 3 },
//   { a: 6, b: 3 },
// ];
function filterAndExtendArrayItems(array) {
// your implementation should be there
return array.reduce((acc, { a, b }) => {
    if (a > 5) {
        acc.push({ a, b, sum: a + b})
    }
    return acc;
}, [])
}

// Task 5 - merge arrays and sort items
// example: [1, 2, 3] [10, 4, 5] => 
// [1, 2, 3, 4, 5, 10]
function mergeAndSort(array1, array2) {
// your implementation should be there
return array1.concat(array2).sort((a, b) => a -b);
}
/*
===========================================
             STRING METHODS
===========================================
*/ 
// Tasks 1 -  convert all strings
// in array to uppercase
function convertToUppercase(array) {
// your implementation should be there
return array.map(s => s.toUpperCase())
}

// Task 2 - should calculate amount of provided char in
// the provided string
// ('char', 't') => 2
function calculateChars(string, char) {
// your implementation should be there
    let count = 0;

    for(c of string) { 
        if(c === char) {
            count +=1;
        }
    }
    return count;
}

// Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
function replaceNumsWithSpaces(string) {
// your implementation should be there
return string.replaceAll(/[0-9]/g, ' ');
}

// Task 4 - sort strings in array
function sortArrayOfStrings(array) {
// your implementation should be there
return array.sort((a,b) => a.localeCompare(b))
}

// Task 5 - return a new string that should contain
// a char taken by index argument from every string in array
// if index is bigger than string length - add space instead
// array - ["osmos", "uterque", "water", "crop",
//         "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
function buildStringUsingIndex(array, index) {
// your implementation should be there
    let st = '';
    array.forEach(s => {
        if (s.length <= index) {
            st += ' ';
        } else {
            st += s.charAt(index);
        }
    });

    return st;
}

// Tasks 6 - check, if string is palindrome
// and return true or false
// noon => true
// level => true
// hello => false
function palindromeValidator(str) {
// your implementation should be there
return str.split('').reverse().join('') === str;
}

/*
==========================
End of your tasks
==========================
*/
/*
==========================
Don't change code below :)
The logic below help you to check, if implementation per task is correct
==========================
*/
const fns = [{
    // string methods
    fn: convertToUppercase,
    args: [[['cat', 'dog']], [['hello', 'hola', 'ahoj']]],
    expected: [['CAT','DOG'], ['HELLO','HOLA','AHOJ']],
}, {    
    fn: calculateChars,
    args: [['Some sttttring', 't'], ['Doggos and cattos', 'o']],
    expected: [4, 3],
}, {    
    fn: replaceNumsWithSpaces,
    args: ['I8like9JS', 'Doggos4and7cattos'],
    expected: ['I like JS', 'Doggos and cattos'],
}, {    
    fn: sortArrayOfStrings,
    args: [[['dog','cat','duck']]],
    expected: [['cat','dog','duck']],
}, {    
    fn: buildStringUsingIndex,
    args: [[["osmos","uterque","water","crop","&","swap","cat","brew","Esmeralda"], 1]],
    expected: ['star wars'],
}, {    
    fn: palindromeValidator,
    args: ['tenet', 'Dune'],
    expected: [true, false],
}, {
    // funcs
    fn: saySomething,
    args: ['Hello, there!'],
    expected: ['Hello, there!'],
}, {    
    fn: sayHelloWorld,
    args: [''],
    expected: ['Hello, World!'],
}, {
    fn:  sayHello,
    args: ['Dany', 'Steven'],
    expected: ['Hello, Dany', 'Hello, Steven!'],sayHello
}, {
    fn:  sumNumbers,
    args: [[10, 10], [0, 333]],
    expected: [20, 333],
}, {
    fn:  valueByKeyInObject,
    args: [['email', { email: 'test@mail.com' }]],
    expected: ['test@mail.com'],
}, {
    fn:  extendObject,
    args: [["name", "Alice"]],
    expected: [{ name: "Alice" }],
}, {
    // arrays
    fn: createArray,
    args: [[1, { n: 1 }, 10], ['a', 'b', 3]],
    expected: [[1, { n: 1 }, 10], ['a', 'b', 3]],
}, {
    fn: removeFirst,
    args: [[[1, 5, 10]], [['a', 'b', 3]]],
    expected: [[5, 10], ['b', 3]],
}, {
    fn: mergeArrays,
    args: [[[1, 5], [20, 10]], [['a', 'b'], ['c']]],
    expected: [[1,5,20,10], ['a', 'b', 'c']],
}, {
    fn: changeItemByIndex,
    args: [[[1, 5], 0, 'cat'], [['a', 'b'], 1, 33]],
    expected: [['cat',5], ['a', 33]],
}, {
    // array methods
    fn: sortArray,
    args: [[[1, 5, 3]], [[101, 9, 11]]],
    expected: [[1,3,5], [9,11,101]],
}, {
    fn: filterArraysOfString,
    args: [[['test', 'cat', 'cinema',]], [['dog', 'test', 'sea']]],
    expected: [['cat','cinema'], ['dog','sea']],
}, {
    fn: sumNumbersInArray,
    args: [[[1,10,2]], [[2000,20,1,1,2]]],
    expected: [13, 2024],
}, {
    fn: filterAndExtendArrayItems,
    args: [[[{ a: 1, b: 10}]], [[{ a: 101, b: 100 }]]],
    expected: [[], [{ a: 101, b: 100, sum: 201 }]],
}, {
    fn: mergeAndSort,
    args: [[[10,1,3], [0,9]], [[3,6], [1,9]]],
    expected: [[0,1,3,9,10], [1,3,6,9]],
}];
  

function test(funcsArr) {
    const successIcon = '✅';
    const failureIcon = '❌';
    let html = '';

    funcsArr.forEach(({ fn, args, expected}) => {
        let failedCases = '';
        const passedTests = args.reduce((acc, currArgs, index) => {
            const result = Array.isArray(currArgs) ? fn(...currArgs) : fn(currArgs);
            const isPassed = JSON.stringify(result) === JSON.stringify(expected[index]);

            if (isPassed) {
                acc += 1;
            } else {
                failedCases += `・${JSON.stringify(currArgs)} / ${JSON.stringify(expected[index])}<br/>`
            }
            return acc;
        }, 0);

        const isCorrect = passedTests === args.length;
        const successMsg = 'Tests passed 🎉';
        const failureMsg = 'Tests failed 🙃';

        const passed = passedTests === 0 ? 0 : (passedTests * 100)/args.length;

        let htmlSegment = `
            <li class="task">
                <div class="task-status">${isCorrect ? successIcon : failureIcon}</div>
                <div class="task-name"><b>${fn.name}</b></div>
                <div class="task-passed-testcases"><b>${passed}%</b></div>
                <div class="task-result">
                    ${isCorrect ? successMsg : failureMsg }
                </div>
                <div class="task-expected">
                    ${isCorrect ? '' : failedCases }
                </div>
            </li>
        `;

        html += htmlSegment;
    });

    const list = document.getElementById('results');
    list.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    test(fns);
}, false);
