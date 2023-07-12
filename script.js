


let body = document.querySelector("body")
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn")
let sideBar = document.querySelector(".side-bar")
let anywhere = document.querySelector(".anywhere")
let header = document.querySelector("header")
let headerTop = document.querySelector(".header-top")

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


