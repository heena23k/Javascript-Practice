// ques =  create a program that checks if a given year is a leap year.
//366 days comes in 4 years in 1 time
// using arrow function

let leapYear = (year)=>{
    if((year%4==0 && year%100 !=0)|| year%400 ===0){
        return "Leap Year";
    }
    else{
        return "Not a leap year";
    }
}

console.log(leapYear(2028));
