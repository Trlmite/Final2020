"use strict"
//swiper galerry///
console.log("shits works");


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    breakpoints:{
        1060:{
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween:50,
        },
        720:{
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween:50,
        },
        400:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween:0,
        },
    },

    pagination: {
      el: '.swiper-pagination',
    },
  })


  // Features slides

let navBlocks = document.querySelectorAll('.nav-block');
let featureBlocks = document.querySelectorAll('.feature-block');

for (let i = 0; i < navBlocks.length; i++) {
    navBlocks[i].addEventListener('click', function() {
        
        for (let z = 0; z < navBlocks.length; z++) {
            navBlocks[z].classList.remove('active');
        }
        
        this.classList.add('active');


        // Get data-target value
        let targetSlide = this.dataset.target; // 1, 2, 3

        // featureSwiper.slideTo(targetSlide - 1);

        // Select feature-block elements by data-slide value
        let slide = document.querySelector('.feature-block[data-slide="'+ targetSlide +'"]');


        for (let x = 0; x < featureBlocks.length; x++) {
            featureBlocks[x].classList.remove('active');
        }

        slide.classList.add('active');
        
    });
}


// burger ////

const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile_nav');
let mobileNavItem = document.querySelectorAll(".mobile_nav a");




burger.addEventListener('click', function(){

    console.log("hello");
    

    if (nav.classList.value != "mobile_nav active"){
        nav.classList.add('active');

        
    }
    else{
        nav.classList.remove('active');
    };
});



//form validation///

let vardas = document.getElementById("name");
let pavarde =document.getElementById("surname");
let numeris = document.getElementById('phone');
let button = document.querySelector('.btnFormTop');

button.addEventListener('click', function(){

    console.log('haaaaa');

    if(vardas.value == "" || pavarde.value == "" || numeris.value ==""){
        alert("Fill the form");
    };
});

let vardas1 = document.getElementById("name1");
let pavarde1 =document.getElementById("surname1");
let numeris1 = document.getElementById('phone1');
let button2 = document.getElementById('buttonBottom');

button2.addEventListener('click', function(){

    console.log('button222a');

    if(vardas1.value == "" || pavarde1.value == "" || numeris1.value ==""){
        alert("Fill the form");
    };
});