//ques =  to find the factorial of a given number 

  //5  = 5*4*3*2*1

  function factorial(num){
    if (num===0||num===1) {
        return 1;
        
    }
    else{
       let fact = 1;
       for (let i = 1; i <= num; i++) {
        fact = fact*i;

         
       } 
       return fact;
       
    }
  }
  console.log(factorial(6));
  