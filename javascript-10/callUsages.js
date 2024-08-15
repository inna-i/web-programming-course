function Product(name, price) {
    this.name = name;
    this.price = price;
    this.id = 'id-' + name;    

    this.getPrice = function() {
        console.log(`Price is ${this.price} euro`);
    }

    this.getId = function() {
        console.log(this.id)
    }
}

function Food(name, price) {
    Product.call(this, name, price);

    this.category = 'food';
}

function Clothes(name, price) {
    Product.call(this, name, price)

    this.category = 'clothes';
}

const drinks = new Food('drinks', 5);
console.log(drinks.category);
console.log(drinks.price);

drinks.getPrice();

const jeans = new Clothes('jeans', 100);

jeans.getId()
jeans.getPrice()