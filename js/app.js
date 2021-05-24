
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

const navbar = document.querySelector('.navbar');
const logoImage = document.querySelector('.logo-img');



window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navbar.classList.add('drop');
    }else{
        navbar.classList.remove('drop');
    }

    if(navbar.classList.contains ("drop")){
        logoImage.setAttribute('src', './images/logo-blacks.png');
    }else{
        logoImage.setAttribute('src', './images/logo-whites.png');
    }
}


// Link tags onclick
const a = nav.querySelectorAll('a');
a.forEach(function(element){
    element.addEventListener('click', function(){
        for(q=0; q<a.length; q++){
            a[q].classList.remove('active');
            nav.classList.toggle('open');
            hamBtn.classList.toggle('rot');
        }
        this.classList.add('active');
    })
})

//password validation for Register
const passwdLength = document.querySelector('.password-lenth');
const passwd = document.querySelector('.password');

errorPasswd = "";

if(passwd.value == '6'){
    console.log("check me here");
}