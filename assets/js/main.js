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