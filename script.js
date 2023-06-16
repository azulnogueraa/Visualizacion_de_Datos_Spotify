function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow", 
//     grabCursor: true, 
//     centeredSlides: true, 
//     slidesPerView:"auto", 
//     coverFlowEffect:{
//         rotate:15, 
//         strech:0,
//         depth:300, 
//         modifier:1, 
//         slideShadows: true
//     },
//     loop:true
// });


var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


