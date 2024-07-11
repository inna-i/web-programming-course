// cars arrays
const cars1 = ['bmw', 'tesla', 'minicooper'];
const cars2 = ['vw', 'opel', 'toyota'];

// cars2.push('mazda');
// console.log(cars2.pop())
// console.log(cars2.shift())
// console.log('cars2  after shift ', cars2);
// cars2.unshift('vw');
// console.log('cars2  ', cars2);

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
// console.log('allGames  ', allGames)

const arr1 = [
	{ a: 100, b: 10 },
	{ a: 3, b: 0 },
	{ a: 2, b: 14 },
	{ a: 199, b: 1 }
];

function filterAndExtendArrayItemsUsingLoop(array) {
	// itterative approach
	const result = [];

	for(let i=0; i < array.length; i++) {
		if (array[i].a > 5) {
			result.push({
				a: array[i].a,
				b: array[i].b,
				sum: array[i].a + array[i].b,
			})
		} 
	}
	return result;
}

// console.log(filterAndExtendArrayItemsUsingLoop(arr1));

function filterAndExtendArrayItems(array) {
	// using array methods
	const filteredArray = array
		.filter(el => {
			// console.log('element => ', el);

			return el.a > 5;
		})
	const extendedArray = filteredArray.map(({ a, b }) => {
			// console.log('element in map ', { a, b });

			return { a, b, sum: a + b}
		})
	const sortedArray = extendedArray.sort((prev, next) => prev.b - next.b)

	return sortedArray;
}

// console.log(filterAndExtendArrayItems(arr1));

const nums1 = [10, 30, 33, 3];
const nums2 = [110, 303, 333, 3];
const nums3 = [110, 303, 333, 3, 0, 1];
// arrays with the same lengths
function sumNumsInArrays(array1, array2) {
	let sum = 0;

	for (let i = 0; i < array1.length; i++ ) {
	 	sum = sum + array1[i] + array2[i];
	}

	return sum;
}

// arrays with different lengts
function sumNumsInArraysWithDifferentLength() {
	const len = nums1.length > nums3.length ? nums1.length : nums3.length;
	let sum = 0;

	for (let i = 0; i < len; i++ ) {
		if (nums1[i]) {
			sum = sum + nums1[i];
		}

		if (nums3[i]) {
			sum = sum + nums3[i];
		}
	}

	return sum;
}

console.log(sumNumsInArrays(nums1, nums2));
console.log(sumNumsInArraysWithDifferentLength());
