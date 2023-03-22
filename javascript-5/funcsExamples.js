const MATH = {
    PI: 3.14
}

const calcSquareArea = ({ a, b }) => {
	return a * b;
}
const calcCircleArea = ({r}) => {
	return Math.PI * r * r;
}

function calcArea (type, options) {
	switch (type) {
		case 'square':
			return calcSquareArea(options)
		case 'circle':
			return calcCircleArea(options)
	
		default:
            console.warn('Input rigth figure type!')
	}
}

// console.log(calcArea('square', { a: 10, b: 30 }));
// console.log(calcArea('circle', { r: 100 }))

function welcomeFn(name, callback) {
    const result = `Hello, ${name}!`;

    return callback(result);
}

// welcomeFn('Tony', (str) => console.log(str));

const configuration = {
    modal: 'WelcomeDialog',
    app: 'TMC',
    version: '2.0'
}

const changeModalName = (config) => {
	config.modal = 'Smtelse';
}
const changeVerion = (config) => {
	config.version = '3.0'
}

function updateConfig(config, cb1, cb2) {
	cb1(config);
	cb2(config);
}

console.log('config before === > ', configuration);
updateConfig(configuration, changeModalName, changeVerion);

console.log('config after === > ', configuration);