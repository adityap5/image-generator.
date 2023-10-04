const btn = document.querySelector("#throttle");
const throttleFunction=(func, delay)=>{
 
let prev = 0;
return (...args) => {
let now = new Date().getTime();
 console.log(now-prev, delay);
    if(now - prev> delay){
    prev = now;
 
     
    return func(...args); 
}
}}
document.querySelector(".center")
.addEventListener("mousemove", throttleFunction(()=>{
  console.log("chla")
}, 1500));