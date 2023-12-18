/*
==========================
    Start of your tasks
==========================
Read what should be done per task and add your implementation 
(between curly brackets {})
*/
// Task 1 - create a function constructor
// that should accept animal specie (cat, dog), name and sound
// implement methods: getName() that should return Name
// implement methods: speak() that should return provided sound
// implement methods: sayHi() that should return "Hello, my name is {name}"
function Animal(specie, name, sound) {
// your implementation should be there
}

// Task 2 - create a user class
// that should accept name and company
// implement method getName() and setName()
// implement methods getCompany() and setCompany()
class User {
// your implementation should be there
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
const cat = new Animal('cat', 'Felix', 'Meow!');
const user = new User('Alex', 'GlobalLogic');

const fns = [{
    ref: cat,
    className: 'Animal',
    methodName: 'getName',
    field: 'name',
    args: '',
    expected: 'Felix',
}, {
    ref: cat,
    className: 'Animal',
    methodName: 'sayHi',
    field: '',
    args: '',
    expected: 'Hello, my name is Felix',
}, {
    ref: cat,
    className: 'Animal',
    methodName: 'speak',
    field: 'sound',
    args: '',
    expected: 'Meow!',
}, {
    ref: user,
    className: 'User',
    methodName: 'getName',
    field: 'name',
    args: '',
    expected: 'Alex',
}, {
    ref: user,
    className: 'User',
    methodName: 'setName',
    field: 'name',
    args: 'Lukas',
    expected: 'Lukas',
}, {
    ref: user,
    className: 'User',
    methodName: 'getCompany',
    field: 'company',
    args: '',
    expected: 'GlobalLogic',
}, {
    ref: user,
    className: 'User',
    methodName: 'setCompany',
    field: 'company',
    args: '',
    expected: 'GlobalLogic',
}];

function test() {
    const successIcon = '✅';
    const failureIcon = '❌';
    let html = '';


    fns.forEach(({ ref, className, methodName, args, field, expected}) => {
        let failedCases = '';
        let result = '';
        if(ref[methodName] !== undefined) {
            const callResult = ref[methodName](args);
            result = callResult === undefined ? ref[field] : callResult;
        }

        const isPassed = JSON.stringify(result) === JSON.stringify(expected);

        if (!isPassed) {
            failedCases += `・${JSON.stringify(args)} / ${JSON.stringify(expected)}<br/>`
        }

        const successMsg = 'Tests passed 🎉';
        const failureMsg = 'Tests failed 🙃';

        const passed = isPassed ? 100 : 0;

        let htmlSegment = `
            <li class="task">
                <div class="task-status">${isPassed ? successIcon : failureIcon}</div>
                <div class="task-name"><b>${className}.${methodName}</b></div>
                <div class="task-passed-testcases"><b>${passed}%</b></div>
                <div class="task-result">
                    ${isPassed ? successMsg : failureMsg }
                </div>
                <div class="task-expected">
                    ${isPassed ? '' : failedCases }
                </div>
            </li>
        `;

        html += htmlSegment;
    });

    const list = document.getElementById('results');
    list.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    test();
}, false);
