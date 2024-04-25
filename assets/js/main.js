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

$(document).ready(function () {
   // Init AOS
   AOS.init();
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