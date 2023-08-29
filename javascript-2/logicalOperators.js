const expectedScore = 3500;
const userScore = 1000;
const userRating = 'star';

// && (and)
const winner = userRating === 'star' && userScore > expectedScore;
console.log('User is the winner ', winner);

// || (or)
const partiallyWinner = userRating === 'star' || userScore > expectedScore;
console.log('User is the partially winner ', partiallyWinner);

// ! (not)
console.log(' ! (not) ', !!userRating)
let open = false;
open = !open;
