class Hero {
	constructor(name, heroName, superPower) {
		this.name = name;
		this.heroName = heroName;
		this.superPower = superPower
	}

	hello() {
		console.log(`Hello, I am ${this.heroName}`);
	}

	getSuperPower() {
		console.log(`I am ${this.heroName}, and I have super power ${this.superPower}`)
	}

	getHeroName() {
		console.log(`I am ${this.heroName}`);
	}
}

const Punisher = new Hero('Frank', 'Punisher', 'Stregth');
Punisher.hello();
Punisher.getSuperPower();
Punisher.getHeroName();

console.log('=============================================')

const Batman = new Hero('Bruce', 'Batman', 'Inteligence');
Batman.hello();
Batman.getSuperPower();
Batman.getHeroName();