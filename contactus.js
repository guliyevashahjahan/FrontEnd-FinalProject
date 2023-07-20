


let body = document.getElementsByTagName("body")
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn")
let sideBar = document.querySelector(".side-bar")
let anywhere = document.querySelector(".anywhere")
let anywhere1 = document.querySelector(".anywhere1")
let header = document.querySelector("header")
let headerTop = document.querySelector(".header-top")
let left = document.querySelector(".left-animate");
let right = document.querySelector(".right-animate");
let loadingAnimation = document.querySelector(".loading-animation")
let spinner = document.querySelector(".spinner-contact")

window.onload = function () {
    left.style.left = "-100%";
    right.style.right = "-100%";
    spinner.style.opacity = "0"
    setTimeout(() => {
       
        loadingAnimation.classList.add("d-none");
    }, 1000);
  
}


window.onscroll = ()=>{
    if(window.scrollY>100){
header.classList.add("fixed")
headerTop.classList.add("d-none")
}
else {
    header.classList.remove("fixed");
    headerTop.classList.remove("d-none")
}
}

menuBtn.addEventListener("click",()=>{
   sideBar = document.querySelector(".side-bar");
    sideBar.classList.add("show");
    anywhere.classList.add("bgshow")
})

closeBtn.addEventListener("click",()=>{
    sideBar.classList.remove("show")
    anywhere.classList.remove("bgshow")
})

anywhere.addEventListener("click", ()=> {
    sideBar.classList.remove("show")
    anywhere.classList.remove("bgshow")
})

