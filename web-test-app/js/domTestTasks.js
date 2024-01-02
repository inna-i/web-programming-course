/*
==========================
    Start of your tasks
==========================
Read what should be done per task and add your implementation 
(between curly brackets {})
*/

// Task 1 - create input element with id="email" and type "email"
// fill input with email provided using argument "mail" (example "nicemail@gmail.com")
// return created element
function createInputEmail(mail) {
	// your implementation should be there
	const input = document.createElement('input');
	input.value = mail;
	input.id = 'mail';
	input.type = 'email';

	return input;
}

// Task 2 - create div element with id="text"
// fill div with content provided via argument "text"
// add padding top and bottom 20px
// add margin top and bottom 30px
// add border at the bottom 2px solid silver
// return created element
function createTextBlock(text) {
	// your implementation should be there
}

// Task 3 - create image element with id="image"
// use image URL provided via argument "imageUrl"
// add padding top and bottom 20px
// set height 350px
// add border at the bottom 2px solid silver
// return created element
function createImageBlock(imageUrl) {
	// your implementation should be there
}

/* ----------- The end ------------- */
// This block of code will help to render everything on the page
// you don't need to change the code below
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
    fn: createInputEmail,
    args: 'myemail@gmail.com',
    expected: [{
		key: 'tagName',
		value: 'INPUT',
	}, {
		key: 'id',
		value: 'mail',
	}, {
		key: 'type',
		value: 'email',
	}, {
		key: 'value',
		value: 'myemail@gmail.com',
	}],
}, {    
    fn: createTextBlock,
    args: 'Hello there! I am the text block and visible on the page',
    expected: [{
		key: 'tagName',
		value: 'DIV',
	}, {
		key: 'id',
		value: 'text',
	}, {
		key: 'innerHTML',
		value: 'Hello there! I am the text block and visible on the page',
	}, {
		key: ['style', 'paddingTop'],
		value: '20px',
	}, {
		key: ['style','paddingBottom'],
		value: '20px',
	}, {
		key: ['style', 'marginTop'],
		value: '30px',
	}, {
		key: ['style','marginBottom'],
		value: '30px',
	}, {
		key: ['style', 'borderBottom'],
		value: '2px solid silver',
	}],
}, {
    fn: createImageBlock,
    args: 'https://img-9gag-fun.9cache.com/photo/aBnL8dD_460s.jpg',
    expected: [{
		key: 'tagName',
		value: 'IMG',
	}, {
		key: 'id',
		value: 'image',
	}, {
		key: 'alt',
		value: 'My image',
	}, {
		key: 'src',
		value: 'https://img-9gag-fun.9cache.com/photo/aBnL8dD_460s.jpg',
	}, {
		key: ['style', 'height'],
		value: '350px',
	}, {
		key: ['style', 'marginTop'],
		value: '20px',
	}, {
		key: ['style','marginBottom'],
		value: '20px',
	}, {
		key: ['style', 'borderBottom'],
		value: '2px solid silver',
	}],
}];

function test() {
    const successIcon = '✅';
    const failureIcon = '❌';
    let html = '';
	
	fns.forEach(({ fn, args, expected }) => {
		let failedCases = '';
		const element = fn(args);

        const passedTests = expected.reduce((acc, check) => {
			let isPassed = false;

			if (element) {
				if (Array.isArray(check.key)) {
					isPassed = element[check.key[0]][check.key[1]] === check.value;
				} else {
					isPassed = element[check.key] === check.value;
				}
			}

			if (isPassed) {
				acc += 1;
			} else {
				failedCases += `・${check.key} / ${check.value}<br/>`
			}
			return acc;
		}, 0);

        const isCorrect = passedTests === expected.length;
        const successMsg = 'Tests passed 🎉';
        const failureMsg = 'Tests failed 🙃';

        const passed = passedTests === 0 ? 0 : Math.ceil((passedTests * 100)/expected.length);


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
	const app = document.getElementById('app');
	const input = createInputEmail('myemail@gmail.com');
	const divText = createTextBlock(
		'Hello there! I am the text block and visible on the page'
	);
	const catStepan = createImageBlock(
		'https://img-9gag-fun.9cache.com/photo/aBnL8dD_460s.jpg'
	);

	app?.append(input);
	app?.append(divText);
	app?.append(catStepan);

    test();
}, false);
