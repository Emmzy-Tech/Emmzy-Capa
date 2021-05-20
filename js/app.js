const hamBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.ul-nav');
const bug = document.querySelectorAll('.bug');

hamBtn.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    // for(i = 0; i < bug.length; i++){
    //     bug[i].classList.toggle('rot');
    // }
    hamBtn.classList.toggle('rot');
})
