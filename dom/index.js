//using the selector 
// select the tag name
// var a = document.getElementsByTagName"div');
// console.log(a);

///---- select by class name 

// var a = document.getElementsByClassName('hero');
// console.log(a);

///--------select by id name 

// var a= document.getElementById('hero')
// console.log(a);

//------->usi g the query selector 
//only one select at a time 
//  var a= document.querySelector('.qs');
//  console.log(a);
 
 //------>query selector All 
 //for use the more than one class 
//  var a= document.querySelectorAll('.qs');
//   console.log(a);



/////=======>Parent Element and child element--------->

//parent eleemt 

// var parent  = document.querySelector('div');
// var p = parent.parentElement;
// console.log(p);


// childern element 

// var child  = document.querySelector('ul');
// var p = child.children;
//  console.log(p);
// console.log(child.childNodes);


///------>siblings -------->
// previous element siblings 

// var a=console.log(document.querySelector('.hero'));
// if (a.previousElementSibling==null) {
//     console.log("Sibling is not present ");
    
    
// }
// else{
//     console.log(a.previousElementSibling);
    
// }


///=====>Append child---------->
// const ul = document.querySelector('ul');
// const newE= document.createElement('li');
// newE.textContent= "Giga chad";
// ul.appendChild(newE);


//for reove 
// const ul  = document.querySelector('ul');
// ul.remove();

////---->replace child
// const list  = document.querySelector('ul')
// const childtoChange = list.children[1];
// const newLi = document.createElement('li');
// newLi.textContent = "giga chad"


// list.replaceChild(newLi,childtoChange)


///----parent node---------->
// var parent  = document.querySelector('div');
// var p = parent.parentElement;
// console.log(p);

// var parent  = document.querySelector('div');
//  var q = parent.parentNode;
//  console.log(q);

// //parent node and parent element are same



///======---->More siblings------------>


///----->first and last child------->
// var firstChild =  document.querySelector('li');
// console.log(firstChild);
// var firstElementChild =  document.querySelector('li');
// console.log(firstElementChild);

// Inner and outer html 
// inner 
// let a= document.querySelector('.qs');
// a.innerHTML = '<i> Giga chat</i>';
// console.log(a);

//outer html 
// let a= document.querySelector('.qs');
// a.outerHTML = '<i> Giga chat</i>';
// console.log(a);


/// inner text and outer content 
// let a = document.querySelector('h1').textContent;
// console.log(a);
// // for inner text


// let p = document.querySelector('h1').innerText;
// console.log(p);

//display none krne k bd hidden inner tex m show nhi hota and text content m show hota h


//  var  target = document.querySelector('.hero');
//  var newE = '<b>Drop X OUT </b>';
// target.insertAdjacentHTML("afterbegin",newE);


//styling ---->
// document.body.style.backgroundColor="";
// let a = document.querySelector('h1');
// a.style.color = 'orange';
// a.style.backgroundColor = "blue";
// a.style.border = " 2px  solid orange";
// a.style.borderRadius = "5px;"


////-----========> Get and set attribute ====>
    let hero = document.querySelector('#hero')
// console.log(hero.getAttribute('id'));
// console.log(hero.getAttribute('about'));

hero.setAttribute("example",123);
// console.log(hero.outerHTML);
for(let att of hero.attributes){
    console.log(att.value);
    console.log(att.name);
    console.log(att);
}

