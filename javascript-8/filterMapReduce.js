const users = [
    { name: 'Tony Stark'},
    { name: 'Bruce Wayne'},
    { name: 'Johny Depp'},
    { name: 'Bruce Willis'},
    { name: 'Bruce Wayne'},
]

// id: `id-${index}`
const updatedUsers = users
    .filter((item) => item.name !== 'Bruce Wayne')
    .map((item, index) => ({ ...item, id: `id-${index}` })); // O(2 * n)

const updatedUsersR = users.reduce((acc, item, index) => {
    if(item.name !== 'Bruce Wayne'){
        acc.push({
            ...item,
            id: `id-${index}`
        })
    }

    return acc;
}, []);  // O(n)

// console.log('updatedUsers ', updatedUsers);
// console.log('updatedUsersR ', updatedUsersR);

const nums = [1,2,3,4,5,6,7,8];
const sum = nums.reduce((acc, item) => acc += item, 0);

// console.log('sum ', sum);

const words = ['May', 'the', 'Force', 'be', 'with', 'you', '!'];
const sentence = words.reduce((value, item) => value + item + " ", '');
console.log('sentence ', sentence);
