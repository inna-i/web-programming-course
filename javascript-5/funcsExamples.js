const MATH = {
    PI: 3.14
}

const calculateSquareArea = ({ a, b }) => {
	return a*b;
}
const calculateCircleArea = (options) => {
	return 2* MATH.PI * options.r * options.r;
}

function calculateArea (type, options) {
	switch (type) {
		case 'square':
			return calculateSquareArea(options)
		case 'circle':
			return calculateCircleArea(options);
	
		default:
            console.warn('Please use rigth figure type!')
	}
}

console.log(calculateArea('square', { a: 10, b: 5 }));
console.log(calculateArea('circle', { r: 10 }));