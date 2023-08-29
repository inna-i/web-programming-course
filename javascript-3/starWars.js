const jedi = {
    jedi: true,
    hasBlueSword: true,
    hasGreenSword: false,
}

const lukeSkywalker = {
    ...jedi,
    name: 'Luke Skywalker',
};

lukeSkywalker.father = 'Anakin Skywalker';
lukeSkywalker['sister'] = 'Lea';
lukeSkywalker.speak = () => console.log('May the Force be with you!');

const { name, speak } = lukeSkywalker;

speak();
console.log('Jedi name ', name);
console.log(lukeSkywalker)