const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),

      menulist = document.querySelector('.menu__list'), //test menu list

      menulink1 = document.querySelector('.first'), //test menu link
      menulink2 = document.querySelector('.second'),
      menulink3 = document.querySelector('.third'),
      menulink4 = document.querySelector('.fourth'),
      menulink5 = document.querySelector('.fifth'),
      menulink6 = document.querySelector('.sixth');




hamburger.addEventListener('click', () => {    //add class "active"
    menu.classList.add('active');   
});

close.addEventListener('click', () => {        //remove class "active"
    menu.classList.remove('active');
});



hamburger.addEventListener('click', () => {        //test menu list
    menulist.classList.add('active');
    menulink1.classList.add('active');
    menulink2.classList.add('active');
    menulink3.classList.add('active');
    menulink4.classList.add('active');
    menulink5.classList.add('active');
    menulink6.classList.add('active');
});

close.addEventListener('click', () => {        //test menu list
    menulist.classList.remove('active');
    menulink1.classList.remove('active');
    menulink2.classList.remove('active');
    menulink3.classList.remove('active');
    menulink4.classList.remove('active');
    menulink5.classList.remove('active');
    menulink6.classList.remove('active');
});



