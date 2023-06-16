function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

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
})


