// find the largest element in an array using the reduce() method;

function  findLargestElement(arr){
    return arr.reduce((max,current)=>
        current>max?current:max

    )
}

let arr = [10,20,30,23,40,89];
 let reduce = findLargestElement(arr);
// console.log(`The largest element is: ${arr}`);
console.log(reduce);

