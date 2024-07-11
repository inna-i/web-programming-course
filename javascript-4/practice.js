const ironMan = {
    name: 'Tony Stark',
    power: 'money',
    world: 'Marvel',
    smart: true,
    team: 'Avengers',
}

const batman = {
    name: 'Bruce Wayne',
    power: 'money',
    world: 'DC',
    smart: true,
    team: 'Justice League',
    run: () => console.log('I am running....'),
}

// console.log(ironMan.hasOwnProperty('smart45'))

batman.run()

const helloFromHero = (hero) => {
    console.log('Hello from ' + hero.name);
}

// helloFromHero(ironMan);
// helloFromHero(batman);

const greeting = (user_name) => {
    helloFromHero(batman);

    return 'Hello, ' + user_name;
}
// const result = greeting('Oksana');
// console.log(result);

const hero = (heroType) => {
    if (heroType === 'batman') {
        helloFromHero(batman);
    } else {
        helloFromHero(ironMan);
    }
}
// hero('iron');

function helloFromHeroFn(greetingText, heroNumber) {
    if (heroNumber === 1) {
        console.log(greetingText + ' I am Batman')
    }
    if (heroNumber === 2) {
        console.log(greetingText + ' I am Iron Man')

    }
}
// helloFromHeroFn('Hello there!', 2);
const result = 'Sum is  ' + 100 + '23'+ 23 ;
console.log(result);
