"use strict"

console.log("shits works");


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 119,

    pagination: {
      el: '.swiper-pagination',
    },
  })