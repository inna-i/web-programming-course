/* Fetch users from GitHub API */
async function getUsers() {
    const USERS_URL = 'https://api.github.com/users'; // REST API

    try {
        let res = await fetch(USERS_URL);

        return res.json();
    } catch(error) {
        console.error(error);
    }
}

/* async opearation - element rendering */
async function renderUsers() {
    let users = await getUsers();
    let html = '';

    users.forEach(user => {
        let htmlSegment = `
            <div class="user">
                <img src="${user.avatar_url}">
                <h2>${user.login}</h2>
            </div>
        `;

        html += htmlSegment;
    });

    const list = document.getElementById('users-list');
    list.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    renderUsers();
}, false);
