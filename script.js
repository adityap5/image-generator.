const throttleFunction=(func, delay)=>{
 
let prev = 0;
return (...args) => {
let now = new Date().getTime();

    if(now - prev> delay){
    prev = now;
    return func(...args); 
}
}}
document.querySelector(".center")
.addEventListener("mousemove", throttleFunction((dets)=>{
 var div =document.createElement("div");
 div.classList.add('imagediv');
 div.style.left = dets.clientX+ 'px';
 div.style.top = dets.clientY + 'px';

 var img =document.createElement("img");
 img.setAttribute("src","https://images.unsplash.com/photo-1629450646456-b7a01cdec01a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJtd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60");
 div.appendChild(img);


 document.body.appendChild(div);

 gsap.to(img,{
    y:"0",
    ease : Power1,
    duration :.6,
 });
 gsap.to(img,{
    y:"100%",
    ease: Power2,
    delay:.4,
 });
 setTimeout(function(){
    div.remove();
 }, 2000);
}, 400));