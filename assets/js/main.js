// Faq
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const toggleButton = item.querySelector('.cursor-pointer');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.fa-solid.fa-plus');
    const cancelIcon = item.querySelector('.fa-solid.fa-minus');

    toggleButton.addEventListener('click', () => {
        item.classList.toggle('faq-open');
        if (item.classList.contains('faq-open')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            answer.style.maxHeight = "0";
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});




// Coming soon countdown date
const countdownDate = "5 june 2024";
const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minuetsEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");

if(daysEle && hoursEle && minuetsEle && secondsEle){
    // Countdown
const countdown = setInterval(function () {
    const newYearsDate = new Date(countdownDate);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);
    const currentTotalMilliSeconds = new Date().getTime();
    const futureTotalMilliSeconds = new Date(countdownDate).getTime();
    const distance = futureTotalMilliSeconds - currentTotalMilliSeconds;
  
    // Update HTML number
    daysEle.innerHTML = days;
    hoursEle.innerHTML = hours;
    minuetsEle.innerHTML = minutes;
    secondsEle.innerHTML = seconds;
  
    // Reset all HTML element when distance 0 seconds
    if (distance < 0) {
      clearInterval(countdown);
      daysEle.innerHTML = "00";
      hoursEle.innerHTML = "00";
      minuetsEle.innerHTML = "00";
      secondsEle.innerHTML = "00";
    }
  }, 1000);
}



// Home1 service carousel
const service = $(".home1-service-carousel");
service.owlCarousel({
      autoPlay: false,
      loop: true,
      slideBy: 1,
      dots: true,
      smartSpeed: 500,
      responsive: {
         0: {
            loop: true,
            items: 1,
         },
         600: {
            loop: true,
            items: 2,
         },
         1000: {
            items: 3,
            loop: true,
         },
      },
   });

// Home1 testimonial carousel
const testimonial = $(".home1-testimonial-carousel");
   testimonial.owlCarousel({
      autoPlay: false,
      loop: true,
      slideBy: 1,
      dots: true,
      smartSpeed: 600,
      responsive: {
         0: {
            loop: true,
            items: 1,
         },
         600: {
            loop: true,
            items: 1,
         },
         1000: {
            items: 1,
            loop: true,
         },
      },
   });

   // Home2 project carousel
const project = $(".home2-project-carousel");
project.owlCarousel({
   autoPlay: false,
   loop: true,
   slideBy: 1,
   dots: true,
   smartSpeed: 600,
   responsive: {
      0: {
         loop: true,
         items: 1,
      },
      600: {
         loop: true,
         items: 1,
      },
      1000: {
         items: 1,
         loop: true,
      },
   },
});

// Home3 project carousel
const home3Project = $(".home3-project-carousel");
home3Project.owlCarousel({
      autoPlay: false,
      loop: true,
      slideBy: 1,
      dots: true,
      smartSpeed: 500,
     center: true,
      margin: 20,
      responsive: {
         0: {
            loop: true,
            items: 1,
         },
         600: {
            loop: true,
            items: 2,
         },
         1000: {
            items: 4,
            loop: true,
         },
      },
   });

// Project details carousel
const projectDetails = $(".project-details-carousel");
projectDetails.owlCarousel({
      autoPlay: false,
      loop: true,
      slideBy: 1,
      dots: true,
      smartSpeed: 500,
      margin: 20,
      responsive: {
         0: {
            loop: true,
            items: 1,
         },
         600: {
            loop: true,
            items: 2,
         },
         1000: {
            items: 2,
            loop: true,
         },
      },
   });

// Home1 hero carousel
   const home1hero = $(".home1-hero-carousel");
   home1hero.owlCarousel({
      autoPlay: false,
      loop: true,
      slideBy: 1,
      dots: false,
      smartSpeed: 600,
      responsive: {
         0: {
            loop: true,
            items: 1,
         },
         600: {
            loop: true,
            items: 1,
         },
         1000: {
            items: 1,
            loop: true,
         },
      },
   });

   // Home1 hero carousel trigger prev slider
   $(".home1-prev-btn").click(function () {
    home1hero.trigger("prev.owl.carousel");
 });

 //   Home 1 trigger next slider
 $(".home1-next-btn").click(function () {
    home1hero.trigger("next.owl.carousel");
 });


 // Home2 hero carousel
 const home2hero = $(".home2-hero-carousel");
 home2hero.owlCarousel({
    autoPlay: false,
    loop: true,
    slideBy: 1,
    dots: false,
    smartSpeed: 600,
    responsive: {
       0: {
          loop: true,
          items: 1,
       },
       600: {
          loop: true,
          items: 1,
       },
       1000: {
          items: 1,
          loop: true,
       },
    },
 });

 // Home2 hero carousel trigger prev slider
 $(".home2-prev-btn").click(function () {
   home2hero.trigger("prev.owl.carousel");
});

//  Home 2 trigger next slider
$(".home2-next-btn").click(function () {
   home2hero.trigger("next.owl.carousel");
});


$(document).ready(function () {
   // Init AOS
   AOS.init();

   // Home1 hero carousel
   var owl = $('.home1-hero-carousel');
   var totalItems = owl.find('.owl-item:not(.cloned)').length;
   var currentIndex = owl.find('.owl-item.active').index() - 1;
   var slideNames = ["BlueBay Gas Plant", "Royal Oil Plant", "Top Metal Element"];
   $('.num').html(''+currentIndex+'/'+totalItems+'');
   $('.slide-name').html(slideNames[currentIndex - 1]);
   
   owl.owlCarousel();

   $('.home1-prev-btn').click(function() {
       currentIndex = owl.find('.owl-item.active').index() - 1;
       $('.num').html(''+currentIndex+'/'+totalItems+'');
       $('.slide-name').html(slideNames[currentIndex - 1]);
   });
   
   $('.home1-next-btn').click(function() { 
       currentIndex = owl.find('.owl-item.active').index() - 1;
       $('.num').html(''+currentIndex+'/'+totalItems+'');
       $('.slide-name').html(slideNames[currentIndex - 1]);
   });

   // Home2 hero carousel
   var owlHeroSlider = $('.home2-hero-carousel');
   var sliderTotalItems = owlHeroSlider.find('.owl-item:not(.cloned)').length;
   var sldierCurrentIndex = owlHeroSlider.find('.owl-item.active').index() - 1;
   var heroSlideNames = ["BlueBay Gas Plant", "Royal Oil Plant", "Top Metal Element"];
   $('.home2-slider-num').html(''+sldierCurrentIndex+'/'+sliderTotalItems+'');
   $('.slide-name').html(heroSlideNames[sldierCurrentIndex - 1]);
   
   owlHeroSlider.owlCarousel();

   $('.home2-prev-btn').click(function() {
       sldierCurrentIndex = owlHeroSlider.find('.owl-item.active').index() - 1;
       $('.home2-slider-num').html(''+sldierCurrentIndex+'/'+sliderTotalItems+'');
       $('.slide-name').html(heroSlideNames[sldierCurrentIndex - 1]);
   });
   
   $('.home2-next-btn').click(function() { 
       sldierCurrentIndex = owlHeroSlider.find('.owl-item.active').index() - 1;
       $('.home2-slider-num').html(''+sldierCurrentIndex+'/'+sliderTotalItems+'');
       $('.slide-name').html(heroSlideNames[sldierCurrentIndex - 1]);
   });
});