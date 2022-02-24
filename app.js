// variables that calls the closed header and also the asnwer box
const faqHeaderClosed = document.querySelectorAll('.faqHeaderClosed')
const faqMain = document.querySelectorAll('.faqMain')

// for each box, a click event will toggle the faqHeaderClosed in and out
faqHeaderClosed.forEach(faqHeaderClosed => {
    faqHeaderClosed.addEventListener('click', () => {
        faqHeaderClosed.classList.toggle('faqHeaderClosed')
    });
})