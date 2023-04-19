function Cat(name, color) {
    this.name = name;
    this.color = color;

    this.jump = function() {
        console.log(`${this.name} is jumping`);
    }
  }
   
Cat.prototype.run = function () {
    console.log("I’m running");
};
Cat.prototype.sound = function () {
    console.log("Meow! Meow!");
};

// Tom => Cat => method? => fn Cat => Cat.__proto__ => method
const Tom = new Cat("Tom", "grey");
const Simon = new Cat("Simon", "red");

Tom.sound();
Tom.jump();
  