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

const drinks = new Food('drinks', 5);
console.log(drinks.category);
console.log(drinks.price);

drinks.getPrice();