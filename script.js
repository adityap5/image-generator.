// var arr =[
// {im:'https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
// {im:'https://images.unsplash.com/photo-1695650858277-6d1eb7ce3216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
// {im:'https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
// {im:'https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
// {im:'https://images.unsplash.com/photo-1682687982468-4584ff11f88a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
// {im:'https://images.unsplash.com/photo-1682685797795-5640f369a70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
// {im:'https://images.unsplash.com/photo-1695844918823-8ec54d7d839c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
// {im:'https://images.unsplash.com/photo-1682685797743-3a7b6b8d8149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
// {im:'https://images.unsplash.com/photo-1696187488666-5d45f5aa384b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
// ]

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
 img.setAttribute("src","https://images.unsplash.com/photo-1682687220015-186f63b8850a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60");
 div.appendChild(img);


 document.body.appendChild(div);

 gsap.to(img,{
    y:"0",
    ease: Power3,
    duration:.4,
 });
 gsap.to(img,{
    y:"100",
    delay:.4,
    ease: Power3,
    duration:.4,
 });
 setTimeout(function(){
    div.remove();
 }, 700);
}, 300));