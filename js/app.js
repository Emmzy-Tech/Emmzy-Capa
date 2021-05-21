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

const form = document.querySelector('.form-overlay');
const showBtns = document.querySelectorAll(".sign-btn");
const closeBtn = document.querySelector('.form-close');


form.addEventListener('click', function(){
    if(event.target==form){
        form.classList.remove('show');
        form.classList.add('hide');
    }
})

for(let i = 0; i<showBtns.length; i++){
    showBtns[i].addEventListener('click', function(){
        form.classList.remove('hide');
        form.classList.add('show');
    })
}

closeBtn.addEventListener('click', function(){
        form.classList.remove('show');
        form.classList.add('hide');
})