 //change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})


 const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween : 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween : 60,
      },
    },
  });

const nav = document.querySelector('.nav__links'); 
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');
const navLinks = document.querySelectorAll('.nav__links a'); // all nav links

const openNav = () => {
    nav.style.display = 'flex';          
    openNavBtn.style.display = 'none';   
    closeNavBtn.style.display = 'inline-block'; 
};

const closeNav = () => {
    nav.style.display = 'none';          
    openNavBtn.style.display = 'inline-block'; 
    closeNavBtn.style.display = 'none';  
};

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

// Auto-close when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});

if(document.body.clientWidth <1024){
    nav.querySelectorAll('li a').forEach(navlinks => {
        navLinks.addEventListener('click',closeNav);
    })
}