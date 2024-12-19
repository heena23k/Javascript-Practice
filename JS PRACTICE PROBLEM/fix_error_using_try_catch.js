// implement to try-catch block to handle error that occurs during API data fetching 

 async function fetchData(){
    try{
        let response = awaitfetch("https //jsonplaceholder.typicode.com/posts");
        let data = awaitresponse.json();
        console.log(data);
        
    }
    catch(error){
        console.log("Error fetching data:" +error);
        
    }

}
fetchData();