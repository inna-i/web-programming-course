// match example
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const foundUppercase = paragraph.match(regex);
const foundLowercase = paragraph.match(/[a-z]/g);
const foundNums = paragraph.match(/[0-9]/g);

// console.log({ foundUppercase, foundLowercase, foundNums });

const user = {
    firstName: 'Ivan',
    lasName: 'Franko',
    city: 'Lviv',
}

// prohibitedWords: ['John', 'Doe', 'New York']
function validatePassword(password, prohibitedWords) {
    let hasProhibitedWords = false;
    const passwordLowerCase = password.toLowerCase();

    prohibitedWords.forEach(word => {
        if (passwordLowerCase.includes(word.toLowerCase())) {
            hasProhibitedWords = true;
            return;
        }
    });

    return hasProhibitedWords;
}

// console.log(validatePassword('FILviv1333', [user.firstName, user.lasName, user.city]))

// replace vs replaceAll
const text = "Our101awesome101AI101generatedText";
// console.log(text.replaceAll('101', ' '));

// split
const countries = 'Ukraine; France; Germany; USA; Spain';
const countriesArray = countries.split('; ').sort((curr, next) => curr.localeCompare(next, 'en'));
console.log({ countriesArray });
