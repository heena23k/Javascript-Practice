// ques =   remove all occurences of a specific element from an arry .

let arr = [10,10,20,10,30,10,40,50,60,10]
let target = 10;

function removeElementFromArray(arr,target){
    return arr.filter(item=>item!==target);
}
let removed = removeElementFromArray(arr,target)
console.log(removed);
