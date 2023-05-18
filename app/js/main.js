const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {    //add class "active"
    menu.classList.add('active');
});

close.addEventListener('click', () => {        //remove class "active"
    menu.classList.remove('active');
});