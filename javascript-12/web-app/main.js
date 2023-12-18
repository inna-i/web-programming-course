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
/* Fetch user by login field from GitHub API */
async function getUserById(login) {
    const USER_URL = `https://api.github.com/users/${login}`; // REST API

    try {
        let res = await fetch(USER_URL);

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
            <div class="user" data-login="${user.login}">
                <img src="${user.avatar_url}" data-login="${user.login}">
                <h2>${user.login}</h2>
            </div>
        `;

        html += htmlSegment;
    });

    const list = document.getElementById('users-list');
    list.innerHTML = html;
}

function getPopupMarkup(user) {
    return `
        <img src="${user.avatar_url}">
        <div>
            <h2>${user.login}</h2>
            <p>Name: <b>${user.name}</b></p>
            <p>Company: <b>${user.company || '-'}</b></p>
            <p>Location: <b>${user.location || '-'}</b></p>
            <p>Blog: <a href="${user.blog}" target="_blank">${user.blog || '-'}</a></p>
            <p>Repository: <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
        </div>        
    `;
}

async function showPopup() {
    const list = document.getElementById('users-list');
    const popup = document.getElementById('popup-wrapper');
    const popupCloseBtn = document.querySelector('.popup-close');
    const popupContent = document.querySelector('.popup-content');

    list.onclick = async ({ target }) => {
        if (target.dataset.login === undefined) {
            return;
        }

        const user = await getUserById(target.dataset.login);

        const html = getPopupMarkup(user);
        popupContent.innerHTML = html;

        // make popup visible
        popup.style.top = 0;

        popupCloseBtn.addEventListener('click', () => {
            popup.style.top = '-100%';
        });
    }
}

// show message using localStorage
function showWelcomeMessage() {
    const KEY = 'notFirstVisit';

    const isNotFirstVisit = localStorage.getItem(KEY) === 'yes';
    const welcomeBanner = document.querySelector('.welcome');

    if (isNotFirstVisit) {
        welcomeBanner.textContent = 'Hello! May the Force be with You';
    } else {
        localStorage.setItem(KEY, 'yes');
        welcomeBanner.textContent = 'Welcome! This this my fisrt web page';
    }
}

// use cookie
function setCookie() {
    // set cookie
    document.cookie = 'yummy_cookie=choco';
    document.cookie = 'tasty_cookie=strawberry';
    console.log(' cookie: ', document.cookie)
}

// use sessionStorage
function setSessionStorage() {
    const KEY = 'token';

    // Save data to session storage
    sessionStorage.setItem(KEY, 'tokenValue');

    // Get data from session storage
    console.log('sessionStorage ', sessionStorage.getItem(KEY));

    // Remove saved data from sessionStorage
    // sessionStorage.removeItem(KEY);

    // Remove all saved data from sessionStorage
    // sessionStorage.clear();
}

document.addEventListener('DOMContentLoaded', function() {
    renderUsers();
    showPopup();
    showWelcomeMessage();
    setCookie();
    setSessionStorage();
}, false);
