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
