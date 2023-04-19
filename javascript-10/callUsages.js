function Product(name, price) {
    this.name = name;
    this.price = price;

    this.getPrice = function() {
        console.log(`Price is ${this.price} euro`);
    }
}

function Food(name, price) {
    Product.call(this, name, price);

    this.category = 'food';
}

const cheese = new Food('cheese', 5);
console.log(cheese.category);
console.log(cheese.name);
cheese.getPrice()
  // expected output: "cheese"
  