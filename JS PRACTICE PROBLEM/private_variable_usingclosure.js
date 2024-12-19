/// ques=  implement a private variable using closure

function createCounter(){
    // private variable
    let count = 0;
    // inner function (closure)
function Increment(){
    count ++;
    console.log("Count :" ,count);
    
}
return{
    incrementCounter:function(){
        Increment();
    },
    getCount:function(){
        return count;
    }
}

}

const counter =  createCounter();
counter.incrementCounter();
console.log(counter.getCount());

