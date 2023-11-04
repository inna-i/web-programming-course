class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    console.log(this.name + ' is running');
  }

  sound() {
    console.log('Meow! Meow!');
  }
}

class LazyCat extends Cat {
  constructor(name, color) {
    super(name, color);

    this.isLazy = true;
  }

  checkIsLazy() {
    console.log('I am lazy cat');
  }

  run() {
    console.log(this.name + ' is to lazy to run');
  }
}

const Tom = new Cat('Tom', 'black');
Tom.run();

const Simon = new LazyCat('Simon', 'white');
Simon.run();
Simon.sound();
Simon.checkIsLazy()