const words = ['May', 'the', 'Force', 'be', 'with', 'you', '!'];
// console.log(words.join(' '));

// sort | localeCompare
const sortedWords = words.sort((curr, next) => curr.localeCompare(next, 'en'));

// console.log(sortedWords)
const nums = [4,5,0,-100,6,1,2,37,8];

const sortedNums = nums.sort((a, b) => a - b);
// console.log(sortedNums);

// includes()
const hasForce = words.includes('Force');

// some()
const users = [
    { name: 'Tony Stark'},
    { name: 'Bruce Wayne'},
    { name: 'Johnny Depp'},
    { name: 'Bruce Willis'},
]

const JohnnyIsHere = users.some(item => item.name === 'Johnny Depp');
const Johnny = users.find(item => item.name === 'Johnny Depp');
console.log(Johnny)


// filter()
const filtered = users.filter(item => item.name !== 'Johnny Depp');

// console.log({ hasForce, JohnnyIsHere, filtered})
