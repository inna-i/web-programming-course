// cars arrays
const cars1 = ['bmw', 'tesla', 'minicooper'];
const cars2 = ['vw', 'opel', 'toyota'];

cars2.push('mazda');
console.log(cars2.pop())
console.log(cars2.shift())
console.log('cars2  after shift ', cars2);
cars2.unshift('vw');
console.log('cars2  ', cars2);

// games arrays
const gamesPart1 = [
	{
        game: 'Dark Souls',
		genre: 'rpg'
	},
	{ 
		name: 'God of War',
		genre: 'action advanture'
	}
];

const gamesPart2 = [
	{
        game: "Baldur's Gate",
		genre: 'rpg'
	},
	{ 
		name: 'Call of duty',
		genre: 'shooter'
	}
];

// const allGames = [...gamesPart1, ...gamesPart2];
const allGames = gamesPart1.concat(gamesPart2);
console.log('allGames  ', allGames)
