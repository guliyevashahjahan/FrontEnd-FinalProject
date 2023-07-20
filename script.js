


let body = document.getElementsByTagName("body")
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn")
let sideBar = document.querySelector(".side-bar")
let anywhere = document.querySelector(".anywhere")
let anywhere1 = document.querySelector(".anywhere1")
let header = document.querySelector("header")
let headerTop = document.querySelector(".header-top")
let videoBtn = document.querySelector(".video-btn")
let videoIframe = document.querySelector(".video-iframe")
let filterButtons = document.querySelectorAll(".portfolio-filter-item")
let portfolioItems = document.querySelector(".portfolio-items")
let testimonialsCarousel = document.querySelector(".testimonials-carousel")
let firstCardWidth = document.querySelector(".testimonials-item").offsetWidth;
let testimonialsCarouselChildrens = [...testimonialsCarousel.children]
let wrapper = document.querySelector(".wrapper")
let left = document.querySelector(".left-animate");
let right = document.querySelector(".right-animate");
let loadingAnimation = document.querySelector(".loading-animation")
let spinner = document.querySelector(".spinner")

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

videoBtn.addEventListener("click",()=>{
videoIframe.classList.remove("d-none");
anywhere1.classList.add("bgshow1")
header.style.zIndex = "5";

})
anywhere1.addEventListener("click",()=>{
    videoIframe.classList.add("d-none")
    anywhere1.classList.remove("bgshow1")
    header.style.zIndex = "1000"
})

filterButtons.forEach(button => button.addEventListener("click",function (e){
    e.preventDefault();
   filterButtons.forEach(btn => btn.classList.remove("active"))
e.target.classList.add("active")
portfolioItems.style.opacity = "0"
setInterval(()=>{
    portfolioItems.style.opacity = "1"
}, 500)

}))

let cardPerView = Math.round(testimonialsCarousel.offsetWidth / firstCardWidth)

testimonialsCarouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    testimonialsCarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})
testimonialsCarouselChildrens.slice(0, cardPerView).forEach(card => {
    testimonialsCarousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

let isDragging = false, startX, startScrollLeft, timeoutId ;
let dragStart = (e) => {
    isDragging = true;
    testimonialsCarousel.classList.add("dragging")
    startX = e.pageX;
    startScrollLeft = testimonialsCarousel.scrollLeft;
}

let dragging = (e) => {
    if(!isDragging)
    return;
   testimonialsCarousel.scrollLeft =startScrollLeft - (e.pageX - startX);
}

let dragStop = () => {
    isDragging = false;
    testimonialsCarousel.classList.remove("dragging")
}
let autoPlay = () => {
    if(window.innerWidth <800) return;
    timeoutId = setTimeout(() => {
        testimonialsCarousel.scrollLeft += firstCardWidth
    }, 2500);
}
autoPlay();

let infiniteScroll = () =>{
    if(testimonialsCarousel.scrollLeft ===0){
        testimonialsCarousel.classList.add("no-transition")
        testimonialsCarousel.scrollLeft = testimonialsCarousel.scrollWidth -( 2* testimonialsCarousel.offsetWidth);
    testimonialsCarousel.classList.remove("no-transition")
    }
    else if(Math.ceil(testimonialsCarousel.scrollLeft) === testimonialsCarousel.scrollWidth - testimonialsCarousel.offsetWidth){
     
        testimonialsCarousel.classList.add("no-transition")
        testimonialsCarousel.scrollLeft = testimonialsCarousel.offsetWidth;
        testimonialsCarousel.classList.remove("no-transition")
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover"))autoPlay();
}


testimonialsCarousel.addEventListener("mousedown", dragStart)
testimonialsCarousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop)
testimonialsCarousel.addEventListener("scroll",infiniteScroll)
