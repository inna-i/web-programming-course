// a. getName() та setName()
// b. getType() та setType()
// c. getLevel() та setLevel()
// d. move() - coordinates x,y,z

class GameCharacter {
   constructor(name, type, level){
		this.name = name;
		this.type = type;
		this.level = level;
        
        this.coordinates = {
            x: 0,
            y: 0,
            z: 0,
        }
	}

	move(x = 0, y = 0, z = 0){
		// this.coordinates.x = x;
		// this.coordinates.y = y;
		// this.coordinates.z = z;
		this.coordinates = { x, y, z};
	}
    
	getName(){
		return this.name;
	}

	setName(newName){
		this.name = newName;
	}

	getType(){
		return this.type;
	}

	setType(newType){
		this.type = newType;
	}

	getLevel(){
		return `${this.name} level is ${this.level}`;
	}

	setLevel(newLevel){
		this.level = newLevel;
	}

    getCoordinates() {
        return this.coordinates;
    }
}

const HarryPotter = new GameCharacter('Harry Potter', 'wizard', 1);

console.log(HarryPotter.getName());
HarryPotter.move(100, 130, 1900);
console.log(HarryPotter.getCoordinates());
console.log(HarryPotter.setLevel(2));
console.log(HarryPotter.getLevel());

const RubeusHagrid = new GameCharacter('Rubeus Hagrid', 'wizard', 10);
console.log(RubeusHagrid.getLevel());

class SeverusSnapeCharacter extends GameCharacter {
	constructor(name, type, level, height){
		super(name, type, level)
		this.height = height;
	}

	getHeight(){
		return this.height;
	}
}

const SeverusSnape = new SeverusSnapeCharacter('Severus Snape', 'wizard', 50, 1.90);
console.log(SeverusSnape.getLevel());
console.log(SeverusSnape.getHeight());

