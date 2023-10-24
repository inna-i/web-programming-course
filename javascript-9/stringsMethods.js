/* .charAt() */
const dogName = 'Rex';
const charAt1Index = dogName.charAt(0);

/* .toUpperCase() and .toLowerCase */
const game = 'halo';
const HALO = game.toUpperCase();
const lotr = 'LOTR'.toLowerCase();

/* .includes() */
const sentence = 'Lorem ipusm dolor';
const hasLorem = sentence.includes('Lorem');

/* .split() */
const loremArray = sentence.split(' ');

/* .replace() .replaceAll()*/
const repl1 = 'Lorem ipusm dolor'.replace('o', 'a');
const repl2 = 'Lorem ipusm dolor'.replaceAll('o', 'a');

/* .trim() */
const cleanup = '   Hello, friend  '.trim();

console.log({ charAt1Index, HALO, lotr,
    hasLorem, loremArray, repl1, repl2, cleanup })

