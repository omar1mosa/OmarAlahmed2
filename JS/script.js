let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);
};

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const mediaElements = document.querySelectorAll(".carousel-track img, .carousel-track video");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const mediaWidth = mediaElements[0].clientWidth + 10; // عرض الصورة/الفيديو + المسافة بينها

    function moveNext() {
        track.style.transition = "transform 0.5s ease-in-out";
        index++;
        track.style.transform = `translateX(-${index * mediaWidth}px)`;

        if (index === mediaElements.length - 4) {
            setTimeout(() => {
                track.style.transition = "none";
                index = 0;
                track.style.transform = `translateX(0)`;
            }, 500);
        }
    }

    function movePrev() {
        if (index === 0) {
            track.style.transition = "none";
            index = mediaElements.length - 4;
            track.style.transform = `translateX(-${index * mediaWidth}px)`;
        }

        setTimeout(() => {
            track.style.transition = "transform 0.5s ease-in-out";
            index--;
            track.style.transform = `translateX(-${index * mediaWidth}px)`;
        }, 10);
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);

    setInterval(moveNext, 3000); // تحريك تلقائي كل 3 ثوانٍ
});
function togglePlay(video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .home-contect', { origin: 'right' });
