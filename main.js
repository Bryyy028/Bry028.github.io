const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {
    console.log('Letter ${i} is ${logo[i].getTotalLength()}');
}



$(document).ready(function () {
    $('.menu-toggler').on('click',function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click',function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click',function () {
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top - 100
        }, 2000)
    });
    $('.up').click(function(){
        $('html,body').animate({scrollTop: 0
        }, 2000);
    });
    $('.home').on('click',function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});





const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.cta'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i)=>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click',() =>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 400,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*typing animation script*/
var typed = new Typed(".typing",{
    strings:["Developer","Illustrator","Designer","Computer Engineer","Software Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

