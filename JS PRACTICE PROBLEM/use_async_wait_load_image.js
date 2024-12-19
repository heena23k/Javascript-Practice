//use async/wait to load multiple images asynchronously and display them on a webpage 

async function loadImage(src){
    return new Promise((resolve,reject)=>{
        let img = new Image(500,500);
        img.onload = function(){
            resolve(img);
        };
        img.onerror = function(){
            reject(new Error("Failed to Load Image:"+src));
        }
        img.src = src;
    })
}
async function loadImages(){
    let imageContainer = document.getElementById("imageContainer");
    let imageUrls=["./image/1.jpeg","./image/2.jpg","./image/3.jpg"];
    try{
        const images = await Promise.all(imageUrls.map(loadImage));
        images.forEach(image => imageContainer.appendChild(image));
    }
    catch(error){
        console.error(error)
    }
}
loadImages()

