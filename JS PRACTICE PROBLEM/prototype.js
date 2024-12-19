// ques = create a prototype for a product object with properties like name,price,and quantity. Add method to the product prototype to calculate total value//
// prototype
function Product(name,price,quantity){
this.name = name ;
this.price = price;
this.quantity = quantity;
}
Product.prototype.calculateTotalValue = function(){
return this.price*this.quantity;
}
const product1 = new Product("widget",10,5);
console.log(product1.calculateTotalValue());

console.log(Product.prototype);
console.log(product1);

 