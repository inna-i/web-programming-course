	
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
 
    run() {
        console.log(this.name +  " is running");
    }
 
    sound() {
        console.log("Meow! Meow!");
    }
}
 
class LazyCat extends Cat {
  constructor(name, color) {
    super(name, color);

    this.isLazy = true;
  }
  
  run() {
    console.log(this.name + ' is too lazy to run');
  }
}
 
const Simon = new LazyCat("Simon", "grey");
const Felix = new Cat("Felix", "white");

Felix.run();
console.log('Felix ', Felix.isLazy)
console.log('=============================')
Simon.run();
console.log('Simon ', Simon.isLazy)