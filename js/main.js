var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper1 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper(".mySwiper1", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// const openPopUp = document.querySelectorAll('open');
// const popup = document.querySelectorAll('my-popup');

// openPopUp.addEventListener('click', function(e){
//   e.preventDefault();
//   popup.classList.add('active');
// });


const openPopup = document.querySelectorAll('.active');
const popup = document.querySelector('.popup');

openPopup.forEach(button => {
    button.addEventListener('click', function(){
        popup.style.display = 'block';
    });
});


var swiper = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper3 = new Swiper(".mySwiper4", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    document.querySelector('.header__burger').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.header__nav').classList.toggle('open')
    })