const nums = [1, 2, 3];
nums.push(4);
nums.unshift(0);
nums[5] = 5;
nums.push(6, 7);
nums.pop();
nums.shift();
// console.log('nums ', nums);

const cars1 = ['bmw', 'tesla', 'minicooper'];
const cars2 = ['vw', 'opel', 'toyota'];

// const cars = cars1.concat(cars2);
const cars = [...cars1, ...cars2];

// console.log('cars ', cars);

const gamesP1 = [
	{
        game: 'Dark Souls',
		genre: 'rpg'
	},
	{ 
		name: 'god of war',
		genre: 'action advanture'
	}
]

const gamesP2 = [
	{
        game: 'Battlefield',
		genre: 'shooter'
	},
	{ 
		name: 'Call of duty',
		genre: 'shooter'
	}
]

const allGames = [...gamesP1, ...gamesP2];

function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

// swap(allGames, 0, 1);

function swapD(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
swapD(allGames, 0, 1);
// console.log(allGames)

// const [gameTop1, gameTop2, gameTop3] = allGames;

// console.log('game 1 ', gameTop1);
// console.log('game 2 ', gameTop2);

function getTop3(games) {
    return [games[0], games[1], games[2]];
}

const [gameTop1, gameTop2, gameTop3] = getTop3(allGames);

// console.log('game top 1 ', gameTop1);
// console.log('game top 2 ', gameTop2);
// console.log('game top 3 ', gameTop3);

function getTop1(games) {
    let obj = {
		...games[0], rating: 10
	};
	return [obj];
}
// destructor
// const [gameTop] = getTop1(allGames);
// console.log('game top  ', gameTop);

const result = getTop1(allGames);

console.log(result[0])
