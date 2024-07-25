
/* Fetch users from GitHub API */
async function getUsers() {
    const USERS_URL = 'https://api.github.com/users'; // REST API

    try {
        let res = await fetch(USERS_URL); // GET

        return res.json();

    } catch (error) {
        console.error('Cannot fetch users from GitHub');
    }
}

/* Fetch user by login */
async function getUser(login) {
    const USER_API = `https://api.github.com/users/${login}`; // REST API

    try {
        const res = await fetch(USER_API);

        return res.json();
    } catch (error) {
        console.error('Cannot fetch user ', { login, error})
    }
}

/* Update user by login */
async function updateUser(login, userPayload) {
    const USER_API = `https://api.github.com/users/${login}`; // REST API

    try {
        const res = await fetch(USER_API, { 
            method: 'PUT',
            body: JSON.stringify(userPayload),
        });

        return res.json();
    } catch (error) {
        console.error('Cannot update user ', { login, error})
    }
}

/* Fetch repos by user login*/
async function getUserRepos(login) {
    const REPOS_URL = `https://api.github.com/users/${login}/repos`;

    try {
        const result = await fetch(REPOS_URL);

        return result.json();
    }  catch (error) {
        console.error('Cannot fetch repos ', { login, error})
    }
}

/* async opearation - element rendering */
async function renderUsers() {
    const users = await getUsers();
    let html = '';

    users.forEach(user => {
        let htmlSegment = `
            <div class="user">
                <img src="${user.avatar_url}">
                <h2>${user.login}</h2>
            </div>
        `;

        html += htmlSegment;
    })

    const list = document.getElementById('users-list');
    list.innerHTML = html;


    const result = await getUser('wycats')
    console.log(result)

    const repos = await getUserRepos('wycats');

    console.log('all repos ', repos);
    console.log('first repo ', repos[0]);

    const upd = await updateUser('wycats', { name: 'Wy Cat' });
    console.log(upd)
}

// DOM event listener
document.addEventListener('DOMContentLoaded', function() {
    renderUsers();

}, false);
