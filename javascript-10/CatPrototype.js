function Cat(name, color) {
    this.name = name;
    this.color = color;

    this.jump = function() {
        console.log(`${this.name} is jumping`);
    }
}

Cat.prototype.run = function() {
    console.log(`${this.name} is running`);
}

Cat.prototype.sound = function() {
    console.log('Meow! Meow!');
}

const Simon = new Cat('Simon', 'red');
const Felix = new Cat('Felix', 'black');

Simon.run();
Felix.sound();