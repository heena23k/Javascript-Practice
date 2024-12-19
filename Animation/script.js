// function myMove(){
//     let pos =0;
//     const elem = document.getElementById('inside');
// const id  = setInterval(frame,10);
// function frame(){
//     if(pos==350){
//         clearInterval(id);
//     }
//     pos++;
//     elem.style.top = pos +'px';
//     elem.style.left = pos++ +'px';

// }
// }


///----onclick--->

// function changeColour(){
//     var elem = document.getElementById('mydiv')
//     elem.style.backgroundColor= 'blue';
//     console.log(elem);
    
// }

// // mouse over and out---==>
//     function onMouseOver(){
//         var elem = document.getElementById('mydiv');
//         elem.style.backgroundColor= "grey";
//         console.log(elem);
        
//     }
//     function onMouseOut(){
//         var elem = document.getElementById('mydiv');
//         elem.style.backgroundColor= "orange";
//         console.log(elem);
        
//     }

    /// mouse down and up 

    // function changeColourDown(){
    //     var elem = document.getElementById('mydiv')
    //     elem.style.backgroundColor= 'grey';
    //     console.log(elem);
        
    // }
    // function changeColourUp(){
    //     var elem = document.getElementById('mydiv')
    //     elem.style.backgroundColor= 'black';
    //     console.log(elem);
        
    // }


    // add listnerEvent ---->

// document.getElementById('#btn').addEventListener('click',fun);
   
//   document.getElementById('#btn').addEventListener('mouseover',fun);
document.getElementById('#btn').addEventListener('mouseout',fun);
   
function fun(){
        document.getElementById('mydiv').style.backgroundColor = 'green';
        console.log("backgroundcolour changed to green");
        
     }