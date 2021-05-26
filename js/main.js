const $status = $('.comments__slider-out');
const $slickElement = $('.single-item');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(`0${i}/ 0${slick.slideCount}`);
});

$('.single-item').slick({
    infinite: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

const accordionItemHeaders = document.querySelectorAll(".questions__item-title");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.menu__items-burger');
const body = document.querySelector('body');

burger.onclick = function () {
  if (this.classList.contains('burger__active')) {
    this.classList.remove('burger__active');
    burgerMenu.classList.remove('manu__active');
    body.style.overflow = 'visible'
  }
  else {
    this.classList.add('burger__active');
    burgerMenu.classList.add('manu__active')
    body.style.overflow = 'hidden'
  }
}


const lists = document.querySelectorAll('.menu__item');

function list(){
  for(let i = 0; i < lists.length; i++){
    lists[i].onclick = function(){
      burger.classList.remove('burger__active');
      burgerMenu.classList.remove('manu__active');
      body.style.overflow = 'visible';
    }
  }
}
list();