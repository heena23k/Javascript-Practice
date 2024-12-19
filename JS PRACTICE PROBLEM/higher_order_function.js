// write a function that takes aan array of numbers and returns a new array with only the even number.

let arr = [10,15,20,25,30,35,40];
function filterEvenNumber(arr){
    const  result = arr.filter(arr=>arr %2 === 0)
    return result;
}
console.log(filterEvenNumber(arr));
console.log(arr);

