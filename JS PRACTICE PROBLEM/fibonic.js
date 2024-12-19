// implement a recursive function to find the nth fibonis series

//0 1 2 3  5 8 13......n
//n=5;
//n = 6 (8)

function fibonaci(n){
    if(n<=1){
        return n;
    }
else{
    return fibonaci(n-1)+fibonaci(n-2)
}

}
   let ans = fibonaci(6);
   console.log(ans);
   