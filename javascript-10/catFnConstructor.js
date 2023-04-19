	
function Cat(name, color) {
    this.name = name;
    this.color = color;
   
    this.run = function () {
      console.log("I’m running");
    };
    this.sound = function () {
      console.log("Meow! Meow!");
    };
  }
   
const Tom = new Cat("Tom", "grey");
const Simon = new Cat("Simon", "red");

console.log(Tom.name)
Tom.run()
Tom.sound()
  