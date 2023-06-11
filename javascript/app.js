const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
   if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
   } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
   }
});

const fixedNav = document.querySelector('.fixed-navbar')

menuBtn.addEventListener('click', () => {
   fixedNav.classList.toggle('left-0')
   menuBtn.classList.toggle('left-5')
})