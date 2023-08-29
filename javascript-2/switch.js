const day = 5;
let dayName = '';

switch(day) {
    case 1: 
        dayName = 'Monday';
        break;
    case 2: 
        dayName = 'Tuesday';
        break;

    case 7:
        dayName = 'Sunday';
        break;
    default:
        console.warn('Please enter number from 1 to 7');
}

console.log(dayName);