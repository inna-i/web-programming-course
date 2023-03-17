class Heroe {
	constructor (comicsName, heroeName, superPower){
		this.comicsName = comicsName;
		this.heroeName = heroeName;
		this.superPower = superPower;
	}

    helloMethod(){
		console.log('Hello, I am ', this.heroeName);
	}
	aboutHeroe(){
		console.log(`I am heroe from ${this.comicsName} and my superpower is ${this.superPower}`)
	}

    setHeroeName(name) {
        this.heroeName = name;
    }
}

const Punisher = new Heroe('Marvel', 'Punisher', 'Strenght');
Punisher.helloMethod();
Punisher.aboutHeroe();
// Punisher.setHeroeName('John');
// Punisher.helloMethod();

const Batman = new Heroe('DC', 'Batman', 'Smart')
Batman.helloMethod();
Batman.aboutHeroe();