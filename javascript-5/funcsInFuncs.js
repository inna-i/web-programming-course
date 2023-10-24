const movies = [
    'Oppenheimer',
    'Interstellar',
    'Inception',
    'Dunkirk'
];

function getMovie(selectMovieCb) {
    const result = selectMovieCb(movies);

    return result;
}

const result = getMovie((ar) => ar[0]);

const selecFromArray = ar => ar[1];
const result2 = getMovie(selecFromArray);

console.log({ result, result2 })