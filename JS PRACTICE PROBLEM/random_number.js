// create a a function that generates random number between a given range 

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(50+1)+1);
}
console.log(getRandomNumber(50,100));
