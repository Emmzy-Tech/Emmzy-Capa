
//Hamburger Menu
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

//Create Account Form
const form = document.querySelector('.form-overlay');
const showBtns = document.querySelectorAll(".sign-btn");
const closeBtn = document.querySelector('.form-close');

//click outside and close
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
        secondForm.classList.remove('show');
        secondForm.classList.add('hide');
    })
}

closeBtn.addEventListener('click', function(){
        form.classList.remove('show');
        form.classList.add('hide');
})

//Login
const secondForm = document.querySelector('.form-over');
const showBtn = document.querySelectorAll('.signin');
const seCloseBtn = document.querySelector('.close2');

for(k = 0; k<showBtn.length; k++){
    showBtn[k].addEventListener('click', function(){
        secondForm.classList.remove('hide');
        secondForm.classList.add('show');
        form.classList.remove('show');
        form.classList.add('hide');
    })
}
seCloseBtn.addEventListener('click', function(){
    secondForm.classList.remove('show');
    secondForm.classList.add('hide');
})