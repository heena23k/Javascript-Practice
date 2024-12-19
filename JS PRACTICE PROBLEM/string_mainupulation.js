// QUES =  write a function that take a string and returns the reverse stringg

let str= "Hello word";
function reversestring(str){
    return str.split("").reverse().join("");
}
console.log(reversestring(str) );
