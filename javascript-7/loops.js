const nums = [1,2,3,4,5,6,7,8];
const nums2 = [1,2,3,4,5,6,7,8,9,10];
let result = 0;

// for(let i = 0; i < nums.length; i++) {
//     // result = result + nums[i];
//     result += nums[i];
//     console.log(`num at index ${i} is ${nums[i]}`);
// }

function sumsNumsInArray(arr1, arr2) {
    const len = arr1.length > arr2.length ? arr1.length : arr2.length;
    let sum = 0;
    
    for(let i = 0; i < len; i++) {
        console.log(`num at index ${i} is ${arr1[i]}`);
        if (arr1[i]) {
            sum += arr1[i];
        }
    
        if (arr2[i]) {
            sum += arr2[i];
        }
    }

    console.log("Sum is equal to ", sum);
    return sum;
}

// sumsNumsInArray(nums, nums2);
// sumsNumsInArray([10, 10, 10, 10, 10], [10, 10]);
const usersArray = [
    { name: 'Tony Stark'},
    { name: 'Bruce Wayne'}
]
const usersObj = {
    1: 'Tony Stark',
    2: 'Bruce Wayne'
}

function welcomeUsers(users){
    for(const user of users){
        console.log(`Hello ${user.name}!`)
    }
}

// welcomeUsers(usersArray);

function welcomeUsersObj(users){
    for(const key in users){
        console.log(`Hello ${users[key]}!`)
    }
}

// welcomeUsersObj(usersObj)

const words = ['May', 'the', 'Force', 'be', 'with', 'you', '!'];
// const reversedWords =;

function sentenceMaker(words) {
    let res = '';
    for(const word of words){
        res += word + ' ';
    }
    return res;
}

function sentenceMakerRevers(words) {
    let res = '';
    for(let i = words.length - 1; i != 0;i--){
        res += words[i] + ' ';
    }
    return res;
}

// console.log(sentenceMaker(words));
// console.log(sentenceMakerRevers(words.reverse()));

function factorial(n) {
    let temp = 1;
    let i = 1;
    // for(let i = 1; i <= n; i++) {
    //     temp *= i; 
    // }
    while(i <= n) {
        temp *= i;
        i++;
    }
    return temp;
}
// recursion
function factorialRec(n) {
    if(n <= 1) {
        return n;
    }

    return n * factorialRec(n-1);
}

console.log(factorialRec(3));