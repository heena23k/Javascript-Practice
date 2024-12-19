// let loc =document.getElementById('loc')
// // loc.innerHTML = window.location.href;
// // loc.innerHTML = window.location.hostname;
// // loc.innerHTML = window.location.pathname

// loc.innerHTML = window.location.protocol


//Pop Ups

// alert('hello');
// prompt("hello how r u ?","fine");
// confirm("are u in 18+")

///bubblings 

// const body  = document.getElementsByTagName('body')[0];
// const div = document.getElementsByTagName('div')[0];
// const span = document.getElementsByTagName('span')[0];
// const button =  document.getElementsByTagName('span')[0];
// body.addEventListener('click',()=>{
//     console.log('Body was clicked');
    
// })

// div.addEventListener('click',()=>{
//     console.log('Div was clicked');
    
// })
// span.addEventListener('click',(event)=>{
//     event.stopPropagation();
//     console.log('span was clicked');
    
// })
// button.addEventListener('click',(event)=>{
//     event.stopPropagation();
//     console.log('button was clicked');
// }

// ----> Event Delegation----->

// const div = document.getElementsByTagName('div')[0];
// div.addEventListener('click',(event)=>{
//     if(event.target.tagName == 'BUTTON'){
//         console.log("Buttton was clicked");
        
//     }
// })

///------->Dimension--->
 let a = document.querySelector('div');
 console.log(a.getBoundingClientRect());
 