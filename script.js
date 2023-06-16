function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow", 
    grabCursor: true, 
    centeredSlides: true, 
    slidesPerView:"auto", 
    coverFlowEffect:{
        rotate:15, 
        strech:0,
        depth:300, 
        modifier:1, 
        slideShadows: true
    },
    loop:true
});


