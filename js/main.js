var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

    let modal = document.getElementById("MyModal");
    let buttons = document.getElementsByClassName("button");
    let span = document.getElementsByClassName("close__modal");

    for (let i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() {
            modal.style.display = "block";
        }
    }

    span.onclick = function() {
        modal.style.display = "none";
      }

    window.onclick = function(event) {
        if (event.target == modal){
            modal.style.display = "none";
        }
    }

    const burger = querySelector('.header__burg');
    const menu = getElementsByClassName('.header__nav');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    })

    function add() {
        menu.classList.toggle('.active');
    }
document.getElementById('connect').addEventListener('.zayavka__button', function(event) {
    event.preventDefault();
    document.getElementById('nummber').ariaValueMax;
    sendDateToServer(number);
});

function sendDateToServer(number) {
    fetch()
}
    

