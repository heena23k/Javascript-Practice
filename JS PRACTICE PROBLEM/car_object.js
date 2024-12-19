// ques = create an object representing a car with properties like make,model,and year. add a method to the car object to start the engine.

let car = {
    make:"Toyota",
    model:"canry",
    year:2022,

}
car.startEngine = function(){
    console.log("Engine Started");
    
}
console.log(car);
console.log(" ");


console.log(car.startEngine());
