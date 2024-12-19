// console.log("Hello");
// console.log(1+2);

// var a = 5;
// var a =6;
// console.log(a);


// let a =6;
// let b = 7;
// b = 8;
// console.log(a);
// console.log(b);


// const a =6;
// const b = 7;
// console.log(a);
// console.log(b);


//implicit conversion 
 
// result  = '2'+2; 
// console.log(result);
// console.log(typeof result);

// loop 
// for(var i=1; i<=10;i++){
//     //    console.log("hello");
//     //    console.log(i);
//     //    console.log("2 *"+i+ "=" +2*i );
//        //backticks uses
// console.log(`2*${i}= ${2*i}`);

    
    
// }


//while loop 
//  var i = 1;
//  while (i<=10) {
//     // console.log(i);
    
//     console.log(`2*${i}= ${2*i}`);
//     i++;
    
    
//  }


// function 

// function name(a) {
//     console.log('Hello ' + a);
   
// }
// name("learners");

// function add(a,b,c) {
//     console.log(a+b+12);
//     }
//     let x =8;
//     let y= 7;
//     add(x,y,12);



// local variable 
// let a = 6;// this is global variable and any ne can access

// function local() {
//     let b = 7;//its local variable 
//     console.log(b);
    
    
// }
// local();


/// anonymos function 
// ish function ko call krne k liye ek varible m store krteh and then call

//  let fun = function () {
//     console.log("Hello");
    
// }
// fun();

// second approach 

// (function(){
//     console.log("Hello");
// })();


/// arrow function 
//1st 
// let a = (x,y)=>{
//     return x+y;

// }

// console.log(a(2,3));

//2nd 
// let a = (x,y)=>console.log(x+y);
// a(4,8);//functin call 




// ---array--

// let name  = ["john","cena","chinu","jane"];

// // console.log(name.push("heena"));
// ///for fist palace
// // name. unshift("heena")
// // name.splice(2,1)
// //here 2 is represent the index value and next 
// //value represent the  delete value
// name.splice(1,0,'heena')
// console.log(name);
// // console.log(name.length);

// // console.log(typeof name);



// let num  = [10,30,50,45,78,98];
// for (let i = 0; i < num.length; i++) {
   
//     console.log(num[i]);
// }


//alternate way 
// let num  = [10,30,50,45,78,98];
// num.forEach((val,index,array)=>{
// console.log(val+" "+ index+" "+array);

// });
// map  using------
// let num  = [10,30,50,45,78,98];
// let a = num.map((val,index)=>{
//     return val+10;
// }
// );
// console.log(num);
// console.log(a);

// ---concat the array

// let num  = [10,30,50,45,78,98];
// // let num2  = [20,34,56,78,9,7];
// // console.log(num.concat(num2));
// // console.log(num.reverse());
// // console.log(num.sort());
// //--slicing 

// // let a = num.slice(1,-1);
// // console.log(a.sort());

// console.log(num.toString());
// console.log(typeof num.toString());



// filter 

// let num  = [10,30,50,45,78,98];

// let a = num.filter((val,index,array)=>{
//     if (val>10 && val<78) {
//         return val;
        
//     }
// }
// )
// console.log(num);
// console.log("After filter");
// console.log(a);

// ----find the value

// let num  = [10,30,50,45,78,98,50];

// let a = num.find((val,index,array)=>{
//     return val==50
// })
// console.log(a);

// find index

// let a  = num.findIndex((val,index,array)=>{
//     return val==50;
// })

// console.log(a);


// split the array 

// let num = '10,20,30';
// let arr  = num.split(',');
// arr.forEach(element => {
//     console.log(element);
    
// });
// console.log(arr);

// let add = arr.join(' and ');
// console.log(add);



/// ----->Map functiom

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const detailedMap = nums.map((num, index, array) => {
// //     return `Index ${index}: ${num} (from array ${array})`;
// // });
// // console.log(detailedMap);
// // console.log(nums);

// // for square 
// const detailedMap = nums.map(num => num*num);
// console.log(nums);
// console.log(detailedMap);



///---------> for each function 

// const nums = [1,2,3,4,5,6,7,8,9,10];
// nums.forEach((nums)=>{
//     square = nums*nums;
//     console.log(square);
    
// })
// --->2nd approach
// let detailedEach = [];
// let sum = 0;
//  nums.forEach((nums)=>{
//     // 
//     sum = sum+nums;
//     detailedEach.push(sum);
// }
// )
// console.log(detailedEach);


// for in or for of ------------=>
    // for prin the in dex and value 
// let arr = [10,20,30,40];
// for (let ar in arr) {
//     // for in dex print 
//     // console.log(ar);
//     // for value print 
//     console.log(arr[ar]);
    
    
// }


//---> for of 
// let arr = [10,20,30,40];
// for (let ar of arr) {
//     console.log(arr);
    
// }


//-----> multidimension array --------->
// let arr = [
//     ["John",54],
//     ["jan",87],
//     ["jam",65,98]
// ]
// // console.log(arr[0][1]);
// // console.log(typeof arr);
// for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr[i].length; j++) {
    
//     console.log(arr[i][j]);
//    }
   
    
    
    
// }

//--------> copy of one array to another

// let arr = [10,20,true];
// let arr2 = arr.slice(0);
// arr2.push("john")
// console.log(arr);

// console.log(arr2);

// use the spread operator 


// let arr= [10,20,30,true]
// let arr2 = [...arr];
// arr2.push("john");
// console.log(arr);
// console.log(arr2);

//---------> Array desructing------>


// let arr1 = ["thomas","chad","neo","jam"];
// // let item1 = arr1[0];
// // let item2  = arr1[1];
// let [item1,item2,...item3] = arr1;
// console.log(item1);
// console.log(item2);
// console.log(item3);


///-------> object------>
// let object = {
//     name : "heena",
//     age : 28,
//     sub:"maths",
// fun: function () {
//     console.log("this is a function");
    

// }
// };

// console.log(object.fun());
// console.log(object.age);
// console.log(object["sub"]);



/// -------=======> DOM---------->



