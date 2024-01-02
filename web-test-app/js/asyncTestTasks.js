/*
==========================
    Start of your tasks
==========================
Read what should be done per task and add your implementation 
(between curly brackets {})
*/
// API URL to use 
const USERS_URL = "https://api.github.com/users";

// Task 1 - make a GET request using GitHub API URL
// and print to the console all users
// expected output first user login from the response that contains 30 users
async function getFirstUsers() {
	// your implementation should be there
}

// Task 2 - make a GET request using GitHub API URL
// and print to the console
// login field of the 3d user from the list
// expected output "wycats"
async function getUserLoginByIndex(index) {
	// your implementation should be there
}

// Task 3 - make a GET request using GitHub API URL
// find user with login "wycats"
// return avatar_url value
// expected output "https://avatars.githubusercontent.com/u/4?v=4"
async function getUserAvatarUrlByLogin(login) {
	// your implementation should be there
}

// Task 4 - make a GET request using GitHub API URL
// find user with login "wayneeseguin" and do one more request using "repos_url" 
// from the response return name of the first repository name
async function getUserFirstRepoByLogin(login) {
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

const fns = [{
    fn: getFirstUsers,
    args: '',
    expected: 'mojombo',
}, {    
    fn: getUserLoginByIndex,
    args: 1,
    expected: 'defunkt',
}, {    
    fn: getUserAvatarUrlByLogin,
    args: 'wycats',
    expected: 'https://avatars.githubusercontent.com/u/4?v=4',
}, {    
    fn: getUserFirstRepoByLogin,
    args: 'wayneeseguin',
    expected: 'afero',
}];

function test() {
    const successIcon = '✅';
    const failureIcon = '❌';
    let html = '';

	const promises = [];
	fns.forEach(({ fn, args }) => {
		promises.push(fn(args))
	})

	Promise.all(promises).then((values) => {
		values.map((resp, index) => {
			const { fn, expected, args } = fns[index];
			const isPassed = resp === expected;
			const failedCases = isPassed ? '' : `・${JSON.stringify(args)} / ${JSON.stringify(expected)}<br/>`;

			const successMsg = 'Tests passed 🎉';
			const failureMsg = 'Tests failed 🙃';

			let htmlSegment = `
				<li class="task">
					<div class="task-status">${isPassed ? successIcon : failureIcon}</div>
					<div class="task-name"><b>${fn.name}</b></div>
					<div class="task-passed-testcases"><b>${isPassed ? '100%' : '0%'}</b></div>
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
	});
}

document.addEventListener('DOMContentLoaded', function() {
    test();
}, false);
