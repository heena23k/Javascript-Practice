// using the map() method to double the all elements of the array


// let arr = [1,2,3,4,5];

// let double = arr.map(arr=>arr*2);
// console.log(double);

// another method 
let arr =  [1,2,3,4,5];

function doubleArrayElements(arr){
    let result = arr.map(arr=>arr*2)
    return result;
   
    
}
console.log(arr);
const res = doubleArrayElements(arr);
console.log(" After double .......");
console.log(res);






